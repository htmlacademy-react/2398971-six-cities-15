import { NameSpace } from '../../const';
import { CommentProcess } from '../../types/state';
import { makeFakeComments } from '../../utils/mocks';
import { getComments, getCommentsDataLoadingStatus, getErrorCommentLoadingStatus, getErrorCommentSendingStatus, getSendNewCommentDataLoadingStatus } from './selectors';

describe('FavoriteProcess selectors', () => {

  const state: CommentProcess = {
    comments: makeFakeComments,
    isSendNewCommentDataLoading: false,
    isCommentsDataLoading: false,
    hasErrorCommentLoading: false,
    hasErrorCommentSending: false,
  };

  it('should return comments from state', () => {
    const result = getComments({ [NameSpace.Comments]: state });

    expect(result).toBe(makeFakeComments);
  });


  it('should return isSendNewCommentDataLoading status from state', () => {
    const result = getCommentsDataLoadingStatus({ [NameSpace.Comments]: state });

    expect(result).toBe(false);
  });

  it('should return isCommentsDataLoading status from state', () => {
    const result = getSendNewCommentDataLoadingStatus({ [NameSpace.Comments]: state });

    expect(result).toBe(false);
  });

  it('should return hasErrorCommentLoading status from state', () => {
    const result = getErrorCommentLoadingStatus({ [NameSpace.Comments]: state });

    expect(result).toBe(false);
  });

  it('should return hasErrorCommentSending status from state', () => {
    const result = getErrorCommentSendingStatus({ [NameSpace.Comments]: state });

    expect(result).toBe(false);
  });
});
