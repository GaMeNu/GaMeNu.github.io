var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/GaMeNu/GaMeNu.github.io.git', // Update to point to your repository  
        user: {
            name: 'GaMeNu', // update to use your name
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)