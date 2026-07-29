function doPost(e) {
  try {
    const sheet =
      SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");

    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.first_name,
      data.last_name,
      data.email,
      data.parish,
      data.subject,
      data.message,
    ]);

    MailApp.sendEmail({
      to: "",
      subject: "New Contact Form Submission - " + data.subject,
      htmlBody: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${data.first_name} ${data.last_name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Parish:</strong> ${data.parish}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>

        <h3>Message</h3>
        <p>${data.message}</p>
      `,
    });

    MailApp.sendEmail({
      to: data.email,
      subject: "Thank you for contacting YU4C Goa",
      htmlBody: `
        <p>Dear ${data.first_name},</p>

        <p>Thank you for contacting <strong>YU4C Goa</strong>.</p>

        <p>We have received your message and will get back to you soon.</p>

        <p>God bless you!</p>

        <br>

        <p><strong>YU4C Goa</strong></p>
      `,
    });

    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: err.message,
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
function authorizeMail() {
  MailApp.sendEmail({
    to: "",
    subject: "Authorization Test",
    body: "MailApp authorization successful.",
  });
}
