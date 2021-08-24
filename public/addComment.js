const addComment = async (event) => {
    event.preventDefault();
    const comment = document.querySelector('#user-comment').value.trim();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];