import axios from "axios";

export const sendGoogleEmail = ({
  body = "",
  recipient = "",
  subject = "",
  attachment,
  mimeType = "application/pdf",
}) => {
  const data = { subject, body, formGoogleSendEmail: recipient, mimeType };

  if (attachment) {
    data.attachment = attachment;
  }
  const mailServer = process.env.MAIL_SERVER;
  const queryParams = new URLSearchParams(data).toString();
  return axios
    .post(mailServer, queryParams)
    .then(function (response) {
      return response;
    })
    .catch(function (err) {
      console.log({ err });

      return err;
    });
};
