export const CREATE_REVIEW = 'CREATE_REVIEW';
export const createAction = (userState) => {
    return {
        type: 'CREATE_REVIEW',
        payload: {
            bookid: userState.bookid,
            bookTitle: userState.bookTitle,
            tags: userState.tags,
            discription: userState.discription,
        }
    }
}

export const EDIT_REVIEW = 'EDIT_REVIEW';
export const editAction = (userState) => {
    return {
        type: 'EDIT_REVIEW',
        payload: {
            bookid: userState.bookid,
            bookTitle: userState.bookTitle,
            tags: userState.tags,
            discription: userState.discription,
        }
    }
}

