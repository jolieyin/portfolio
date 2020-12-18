// Rotating Navigation
const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click', () => container.classList.add('show-nav'));

close.addEventListener('click', () => container.classList.remove('show-nav'));


// Mouse Hover Effect
const right = document.querySelector('.right');
const left = document.querySelector('.left');
const contactContainer = document.querySelector('.contact-container');

right.addEventListener('mouseenter', () => contactContainer.classList.add('hover-right'));
right.addEventListener('mouseleave', () => contactContainer.classList.remove('hover-right'));


// Contact Form => Send Email
const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    Email.send({
        SecureToken: '8852c54f-6f71-4e8f-acc9-0d0911f13cc6',
        From: `${name}<${email}>`,
        To: 'joliehuang@outlook.com',
        Subject: `${name} has sent you a message`,
        Body: `
        <h4>Name:</h4> ${name} <br><br>
        <h4>Email:</h4> ${email} <br><br>
        <h4>Message:</h4> ${message}
        `
    }).then(res => {
            if (res == 'OK') {
                alert('Your message has been sent successfully!');

                Email.send({
                    SecureToken: '8852c54f-6f71-4e8f-acc9-0d0911f13cc6',
                    From: 'Jolie Huang<joliehuang@outlook.com>',
                    To: `${name}<${email}>`,
                    Subject: 'Your message has been received',
                    Body: `
                <h3>Thank you for your message! I will get back to you asap.</h3> <br><br>
                <h4>Name:</h4> ${name} <br><br>
                <h4>Email:</h4> ${email} <br><br>
                <h4>Message:</h4> ${message}
                `
                }).then(res => {
                    if (res == 'OK') {
                        alert('Thank you for your message! Please check your mailbox for the copy.');
                    }
                });

                form.reset();
            } else {
                alert('Failed to send your message... Please try again...');
                throw new Error(res);
            };
        });
});