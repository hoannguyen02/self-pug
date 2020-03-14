const navLinks = ['About', 'Education', 'Experience', 'Charity', 'Hobbies'].map(
    nav => ({
        title: nav,
        url: `/${nav.toLocaleLowerCase()}`,
    })
);

module.exports = { navLinks };
