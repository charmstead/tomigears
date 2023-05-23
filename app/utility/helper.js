export const warningAlert = ({ message = "You're all caught up.", status = "danger" }) => {
  window.UIkit.notification({
    message: `<div class='uk-text-center uk-text-small'>${message}</div>`,
    status,
    timeout: 10000,
  });
};
