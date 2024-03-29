import { NameSpace } from '../../const';
import { Comments } from '../../types/offer';
import { State } from '../../types/state';

export const getComments = (state: State): Comments | null => state[NameSpace.Comments].comments;
export const getCommentsDataLoadingStatus = (state: State): boolean => state[NameSpace.Comments].isCommentsDataLoading;
export const getSendNewCommentDataLoadingStatus = (state: State): boolean => state[NameSpace.Comments].isSendNewCommentDataLoading;
