import { NameSpace } from '../../const';
import { Comments } from '../../types/offer';
import { State } from '../../types/state';

export const getComments = (state: Pick<State, NameSpace.Comments>): Comments | null => state[NameSpace.Comments].comments;
export const getCommentsDataLoadingStatus = (state: Pick<State, NameSpace.Comments>): boolean => state[NameSpace.Comments].isCommentsDataLoading;
export const getSendNewCommentDataLoadingStatus = (state: Pick<State, NameSpace.Comments>): boolean => state[NameSpace.Comments].isSendNewCommentDataLoading;
export const getErrorCommentLoadingStatus = (state: Pick<State, NameSpace.Comments>): boolean => state[NameSpace.Comments].hasErrorCommentLoading;
export const getErrorCommentSendingStatus = (state: Pick<State, NameSpace.Comments>): boolean => state[NameSpace.Comments].hasErrorCommentSending;
