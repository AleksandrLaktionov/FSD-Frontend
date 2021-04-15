export const likeButton = () => {
    let formLikeButton = document.querySelector('.like_button');
    let likeButtonDislike = formLikeButton.querySelector('#like_button_dislike');
    let likeButtonLike = formLikeButton.querySelector('#like_button_like');
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