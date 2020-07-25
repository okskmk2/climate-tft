/**
 * @return {string} yyyy-mm-dd
 */
export const now = () => {
  let nowd = new Date();
  return nowd.getFullYear() + "-" + nowd.getMonth() + "-" + nowd.getDate();
};
