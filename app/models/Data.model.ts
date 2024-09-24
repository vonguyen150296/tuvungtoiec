export interface CATEGORY_TYPE {
    id: number,
    text: string;
    explanation: string;
    image: string;
}

export interface WORD_TYPE {
    id: number,
    idCategory: number,
    text: string;
    explanation: string;
    example: string;
    exampleExplanation: string;
    type: string;
    audio: string;
}