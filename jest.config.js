module.exports = {
  transform: {
    '^.+\\.svelte$': 'svelte-jester',
    '^.+\\.js$': 'esbuild-jest',
  },
  moduleFileExtensions: ['js', 'svelte'],
};
