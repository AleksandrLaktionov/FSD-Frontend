export const likeButton = () => {
    // let formLikeButton = document.querySelector('.like_button');
    let likeButtonDislike = document.querySelectorAll('.like-button-dislike');
    for (let i = 0; i < likeButtonDislike.length; i++) {
        const dislike = likeButtonDislike[i];
        let spanTextDislike = dislike.firstChild.textContent;

        dislike.addEventListener("click", function() {
            ++spanTextDislike;
            dislike.firstChild.textContent = spanTextDislike;
            return spanTextDislike;
        })
    }
    let likeButtonLike = document.querySelectorAll('.like-button-like');
    for (let i = 0; i < likeButtonLike.length; i++) {
        const like = likeButtonLike[i];
        let spanTextLike = like.firstChild.textContent;

        like.addEventListener("click", function() {
            ++spanTextLike;
            like.firstChild.textContent = spanTextLike;
            return spanTextLike;
        });
    }
}