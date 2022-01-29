export type Question = {
  questionText: string;
  image?: string;
  answers: string[];
  correctAnswerIndex?: number;
};

const quizQuestions: Question[] = [
  {
    questionText: "How many skunk work NFTs have been created?",
    image:
      "https://lh3.googleusercontent.com/I7EnjOKIz81UI25TcNK8WFnCplQWoI1vOAfgq7VXHuhqaIPataeu11JdKJGnhQQ41HtRK-gkGerVkt-jVvVkXtA9H7zUshV4YiL1=w600",
    answers: [
      "You're joking, there is no skunk works collection!",
      "100",
      "1000",
      "10000",
      "12000",
    ],
    correctAnswerIndex: 4,
  },
  {
    questionText:
      "Are there different generations for the skunk works collection?",
    image:
      "https://lh3.googleusercontent.com/EFCcYVduT9KQat-Cu9ZquF8np-hIlnIU5bRN-kLz11CoPT8Sq39-4Adpl6clucvW3HyeX6M7kmtbqXKmFp2OELfE25l3NNrKjFpdgg=w600",
    answers: ["42!", "Yes!", "Not at all", "What is a generation?"],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "How many different properties are available in the skunk works collection?",
    image:
      "https://lh3.googleusercontent.com/O1ALKQdAPXnJHrmctr8QzweEoh0fLOuth8FYALF6nPmOUSpWCQMDqATmDhGMie5ta7cOP39bZOdOjUJXtnGKUyb0abw7xwjKtx9CMiQ=w600",
    answers: ["-1", "2", "Ten", "5"],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "Where can you find more information about the skunk works collection?",
    image:
      "https://lh3.googleusercontent.com/SsF3gUvdQsbM2PXXUEGTZfJPtedu5Vj9j0C3OByUoURy7u65971TlEAn0dF8CytPxJ36lmCureyeq1bVEPTAZQsCdTpUxoTuFIcMT_g=w600",
    answers: ["https://nft.urbanisierung.dev", "what?", "yes please!"],
    correctAnswerIndex: 0,
  },
  {
    questionText:
      "How many skunk work NFTs have been created for generation 2?",
    image:
      "https://lh3.googleusercontent.com/SsF3gUvdQsbM2PXXUEGTZfJPtedu5Vj9j0C3OByUoURy7u65971TlEAn0dF8CytPxJ36lmCureyeq1bVEPTAZQsCdTpUxoTuFIcMT_g=w600",
    answers: ["1998", "1999", "2000", "2001", "2002"],
    correctAnswerIndex: 2,
  },
];

export default quizQuestions;
