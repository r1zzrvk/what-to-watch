export type TFilm = {
    id: number
    name: string
    posterImage: string
    previewImage: string
    backgroundImage: string
    backgroundColor: string
    videoLink: string
    previewVideoLink: string
    description: string
    rating: number
    scoresCount: number
    director: string
    starring: string[]
    runTime: number
    genre: string
    released: number
    isFavorite: boolean
};

export type TReview = {
    comment: string
    date: string
    id: number
    rating: number
    user: TReviewUser
}

export type TReviewUser = {
    id: number
    name: string
}

export type TPostReview = {
    comment: string
    rating: number
}
