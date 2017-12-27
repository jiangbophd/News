export const runningCordova = !!window.cordova;

export const formatImg = (html) => {
  let newContent= html.replace(/<img[^>]*>/gi,(match,capture) => {
    return match.replace(/alt=\"(.*)\"/gi, 'style="width: 100%"');
  });
  return newContent;
};
