export const likeButton = () => {
    // let formLikeButton = document.querySelector('.like_button');
    let likeButtonDislike = document.querySelector('.like-button-dislike');
    let likeButtonLike = document.querySelector('.like-button-like');
    let spanTextDislike = likeButtonDislike.firstChild.textContent;
    let spanTextLike = likeButtonLike.firstChild.textContent;
    likeButtonDislike.addEventListener("click", function () {
        ++spanTextDislike;
        likeButtonDislike.firstChild.textContent = spanTextDislike;
        return spanTextDislike;
    });
    likeButtonLike.addEventListener("click", function () {
        ++spanTextLike;
        likeButtonLike.firstChild.textContent = spanTextLike;
        return spanTextLike;
    })
}