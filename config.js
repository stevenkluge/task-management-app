// determine project root directory
const { dirname } = require('path');
const projRoot = dirname(require.main.filename);

const config = {
    db: {
        connection_string: process.env.MONGODB_CONNECTION_STR
    },
    paths: {
        project_root: projRoot,
        user_pfp_dir: projRoot + '/public/users/'
    },
    placeholders: {
        pfp_placeholder: user_pfp_dir + 'placeholder.png'
    }
};

module.exports = config;