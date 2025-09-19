const isGithubPagesBuild = import.meta.env.STORYBOOK_GITHUB_PAGES_BUILD;
const basePath = isGithubPagesBuild ? '/koan' : '';

export default {
  default: {
    frame_h: 16,
    frame_v: 9,
    frame_item: `<img src='${basePath}/image.jpg' />`,
  },
}
