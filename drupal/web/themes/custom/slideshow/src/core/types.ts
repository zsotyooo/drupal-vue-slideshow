export interface DrupalWebappData {
  nid: number;
  type: string;
  paragraph: [];
}

export interface NodeData {
  nid: number;
  type: string;
}

export interface ParagraphData {
  id: number;
  type: string;
  [propName: string]: any;
}

export interface ErrorData {
  error: boolean;
  message: string;
}

export interface State {
  node?: NodeData;
  paragraphs?: ParagraphData[];
  activeParagraphId?: number;
}
