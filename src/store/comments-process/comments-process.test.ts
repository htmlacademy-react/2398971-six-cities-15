import { makeFakeComment, makeFakeComments, makeFakeCurrentOffer } from '../../utils/mocks';
import { fetchNewCommentAction, fetchOfferCommentAction } from '../api-actions';
import { clearComments, commentsProcess } from './comments-process';

describe('CommentProcess Slice', () => {
  const mockOffer = makeFakeCurrentOffer();
  const mockComments = makeFakeComments;
  const mockNewComment = makeFakeComment();

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      comments: [],
      isSendNewCommentDataLoading: false,
      isCommentsDataLoading: true,
      hasErrorCommentLoading: false,
      hasErrorCommentSending: false,
    };

    const result = commentsProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      comments: [],
      isSendNewCommentDataLoading: false,
      isCommentsDataLoading: true,
      hasErrorCommentLoading: false,
      hasErrorCommentSending: false,
    };

    const result = commentsProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "comments" to [] with "clearComments"', () => {
    const initialState = {
      comments: mockComments,
      isSendNewCommentDataLoading: false,
      isCommentsDataLoading: true,
      hasErrorCommentLoading: false,
      hasErrorCommentSending: false,
    };

    const expectedState = {
      comments: [],
      isSendNewCommentDataLoading: false,
      isCommentsDataLoading: true,
      hasErrorCommentLoading: false,
      hasErrorCommentSending: false,
    };

    const result = commentsProcess.reducer(initialState, clearComments());

    expect(result).toEqual(expectedState);
  });

  it('should set "isFavoriteOffersDataLoading" to "true", "hasErrorFavoriteOffersLoading" to "false" with "fetchOfferCommentAction.pending"', () => {
    const expectedState = {
      comments: [],
      isSendNewCommentDataLoading: false,
      isCommentsDataLoading: true,
      hasErrorCommentLoading: false,
      hasErrorCommentSending: false,
    };

    const result = commentsProcess.reducer(undefined, fetchOfferCommentAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "comments" to array with Offer, "isCommentsDataLoading" to "false", "hasErrorCommentLoading" to "false" with "fetchOfferCommentAction.fulfilled"', () => {

    const expectedState = {
      comments: mockComments,
      isSendNewCommentDataLoading: false,
      isCommentsDataLoading: false,
      hasErrorCommentLoading: false,
      hasErrorCommentSending: false,
    };

    const result = commentsProcess.reducer(
      undefined,
      fetchOfferCommentAction.fulfilled(
        makeFakeComments, '', mockOffer.id)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "isCommentsDataLoading" to "false", "hasErrorCommentLoading" to "true" with "fetchOfferCommentAction.rejected"', () => {
    const expectedState = {
      comments: [],
      isSendNewCommentDataLoading: false,
      isCommentsDataLoading: false,
      hasErrorCommentLoading: true,
      hasErrorCommentSending: false,
    };

    const result = commentsProcess.reducer(undefined, fetchOfferCommentAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "isSendNewCommentDataLoading" to "true", "hasErrorCommentSending" to "false" with "fetchNewCommentAction.pending"', () => {
    const expectedState = {
      comments: [],
      isSendNewCommentDataLoading: true,
      isCommentsDataLoading: true,
      hasErrorCommentLoading: false,
      hasErrorCommentSending: false,
    };

    const result = commentsProcess.reducer(undefined, fetchNewCommentAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "comments" to array with Offer, "isCommentsDataLoading" to "false", "hasErrorCommentLoading" to "false" with "fetchNewCommentAction.fulfilled"', () => {

    const initialState = {
      comments: [],
      isSendNewCommentDataLoading: false,
      isCommentsDataLoading: true,
      hasErrorCommentLoading: false,
      hasErrorCommentSending: false,
    };

    const expectedState = {
      comments: [mockNewComment],
      isSendNewCommentDataLoading: false,
      isCommentsDataLoading: true,
      hasErrorCommentLoading: false,
      hasErrorCommentSending: false,
    };

    const result = commentsProcess.reducer(
      initialState,
      fetchNewCommentAction.fulfilled(mockNewComment, '', {offerId: mockOffer.id, comment: mockNewComment.comment, rating: mockNewComment.rating})
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "isSendNewCommentDataLoading" to "false", "hasErrorCommentSending" to "true" with "fetchNewCommentAction.rejected"', () => {
    const expectedState = {
      comments: [],
      isSendNewCommentDataLoading: false,
      isCommentsDataLoading: true,
      hasErrorCommentLoading: false,
      hasErrorCommentSending: true,
    };

    const result = commentsProcess.reducer(undefined, fetchNewCommentAction.rejected);

    expect(result).toEqual(expectedState);
  });

});
