import execa from 'execa';

/**
 * Open url in browser.
 *
 * @param {String} url
 */
function openTab(url) {
  execa('open', [`${url}`]).stdout.pipe(process.stdout);
}

/**
 * Render search response message.
 *
 * @param {String} action action word
 * @param {String} term search term
 * @param {String} url real search url
 * @param {String} engine search engine
 */
export const addonSearch = {
  name: 'search',
  requirements: [],
  action: (robot) => (action, term, url, engine) => {
    robot.send(`${action} [${term}](${url}) via ${engine}`);
    openTab(url);
  },
};

const addons = [addonSearch];

export {addons};
