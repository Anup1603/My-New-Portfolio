import { site } from "@/data/site";

interface ContactSubmission {
  name: string;
  email: string;
  message: string;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

/**
 * Builds the notification email sent to the portfolio owner when the
 * contact form is submitted. Markup is table-based with inline styles —
 * the only layout dialect email clients render consistently.
 */
export function buildContactEmail({ name, email, message }: ContactSubmission) {
  const receivedAt = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(new Date());

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);
  const replySubject = encodeURIComponent(`Re: your message via ${site.url.replace("https://", "")}`);

  const subject = `📬 ${name} sent you a message via your portfolio`;

  const text = [
    "NEW PORTFOLIO MESSAGE",
    "",
    `From:     ${name}`,
    `Email:    ${email}`,
    `Received: ${receivedAt} (IST)`,
    "",
    "Message:",
    "----------------------------------------",
    message,
    "----------------------------------------",
    "",
    `Reply directly to this email, or write to ${email}.`,
    `Sent by the contact form at ${site.url}`,
  ].join("\n");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light" />
  <title>New portfolio message</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f7;">
  <!-- Preheader: shows next to the subject in the inbox list, hidden in the body -->
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">
    ${safeMessage.slice(0, 120)}
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f7;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#6d28d9 0%,#8b5cf6 45%,#06b6d4 100%);background-color:#6d28d9;border-radius:16px 16px 0 0;padding:28px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="44" valign="middle">
                    <div style="width:44px;height:44px;border-radius:12px;background-color:rgba(255,255,255,0.18);text-align:center;line-height:44px;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:bold;color:#ffffff;">
                      ${site.initials}
                    </div>
                  </td>
                  <td valign="middle" style="padding-left:14px;">
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:bold;color:#ffffff;">
                      New portfolio message
                    </p>
                    <p style="margin:2px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:rgba(255,255,255,0.85);">
                      Someone reached out through your contact form
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Sender details -->
          <tr>
            <td style="background-color:#ffffff;padding:28px 32px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial,Helvetica,sans-serif;">
                <tr>
                  <td style="padding:0 0 14px;">
                    <p style="margin:0;font-size:11px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;color:#8b8b9a;">From</p>
                    <p style="margin:4px 0 0;font-size:16px;font-weight:bold;color:#18181b;">${safeName}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 14px;border-top:1px solid #ececf1;">
                    <p style="margin:14px 0 0;font-size:11px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;color:#8b8b9a;">Email</p>
                    <p style="margin:4px 0 0;font-size:15px;">
                      <a href="mailto:${safeEmail}" style="color:#6d28d9;text-decoration:none;font-weight:bold;">${safeEmail}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0;border-top:1px solid #ececf1;">
                    <p style="margin:14px 0 0;font-size:11px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;color:#8b8b9a;">Received</p>
                    <p style="margin:4px 0 0;font-size:14px;color:#3f3f46;">${receivedAt} · IST</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="background-color:#ffffff;padding:20px 32px 4px;">
              <p style="margin:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;color:#8b8b9a;">Message</p>
              <div style="background-color:#f8f8fb;border:1px solid #ececf1;border-left:4px solid #8b5cf6;border-radius:10px;padding:18px 20px;">
                <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:15px;line-height:1.65;color:#27272a;white-space:pre-wrap;">${safeMessage}</p>
              </div>
            </td>
          </tr>

          <!-- Reply button -->
          <tr>
            <td style="background-color:#ffffff;padding:24px 32px 32px;border-radius:0 0 16px 16px;" align="center">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:linear-gradient(135deg,#6d28d9 0%,#8b5cf6 100%);background-color:#6d28d9;border-radius:10px;">
                    <a href="mailto:${safeEmail}?subject=${replySubject}"
                       style="display:inline-block;padding:13px 34px;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:bold;color:#ffffff;text-decoration:none;">
                      Reply to ${safeName}
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin:14px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#8b8b9a;">
                Or just hit reply — this email's reply-to is set to the sender.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding:20px 32px 0;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#a1a1aa;">
                Sent by the contact form at
                <a href="${site.url}" style="color:#6d28d9;text-decoration:none;">${site.url.replace("https://", "")}</a>
              </p>
              <p style="margin:6px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#c4c4cc;">
                © ${new Date().getFullYear()} ${site.name}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, text, html };
}
