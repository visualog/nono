import { Question } from '../types';

// 인덕션 카테고리 질문
const inductionQuestions: Question[] = [
    {
        id: 'ind-1',
        categoryId: 'induction',
        text: '몇 명이서 주로 요리하시나요?',
        step: 1,
        options: [
            { id: 'ind-1-a', text: '혼자 (1인 가구)', value: 1, relatedTags: ['1구', '미니'] },
            { id: 'ind-1-b', text: '2인', value: 2, relatedTags: ['2구', '슬림'] },
            { id: 'ind-1-c', text: '3인 이상', value: 3, relatedTags: ['3구', '빌트인'] },
        ],
    },
    {
        id: 'ind-2',
        categoryId: 'induction',
        text: '주로 어떤 요리를 하시나요?',
        step: 2,
        options: [
            { id: 'ind-2-a', text: '간단한 요리 (라면, 계란프라이)', value: 'simple', relatedTags: ['저렴', '기본'] },
            { id: 'ind-2-b', text: '볶음/찌개류', value: 'medium', relatedTags: ['중급', '화력조절'] },
            { id: 'ind-2-c', text: '본격 요리 (튀김, 스테이크 등)', value: 'advanced', relatedTags: ['고급', '고화력', '부스터'] },
        ],
    },
    {
        id: 'ind-3',
        categoryId: 'induction',
        text: '예산은 어느 정도 생각하고 계세요?',
        step: 3,
        options: [
            { id: 'ind-3-a', text: '10만원 이하', value: 100000, relatedTags: ['저렴', '가성비'] },
            { id: 'ind-3-b', text: '10~30만원', value: 300000, relatedTags: ['중급', '가성비'] },
            { id: 'ind-3-c', text: '30만원 이상', value: 500000, relatedTags: ['고급', '프리미엄'] },
        ],
    },
];

// 노트북 카테고리 질문
const laptopQuestions: Question[] = [
    {
        id: 'lap-1',
        categoryId: 'laptop',
        text: '주 사용 목적이 무엇인가요?',
        step: 1,
        options: [
            { id: 'lap-1-a', text: '문서 작업 / 인터넷', value: 'office', relatedTags: ['사무용', '가벼운'] },
            { id: 'lap-1-b', text: '영상 편집 / 디자인', value: 'creative', relatedTags: ['고사양', '그래픽카드'] },
            { id: 'lap-1-c', text: '게임', value: 'gaming', relatedTags: ['게이밍', 'RTX', '고주사율'] },
            { id: 'lap-1-d', text: '개발', value: 'dev', relatedTags: ['개발용', '램16', '맥북'] },
        ],
    },
    {
        id: 'lap-2',
        categoryId: 'laptop',
        text: '휴대성이 중요하신가요?',
        step: 2,
        options: [
            { id: 'lap-2-a', text: '네, 가벼운 게 좋아요', value: 'light', relatedTags: ['경량', '13인치', '14인치'] },
            { id: 'lap-2-b', text: '적당히', value: 'medium', relatedTags: ['15인치'] },
            { id: 'lap-2-c', text: '성능이 더 중요해요', value: 'performance', relatedTags: ['고성능', '17인치'] },
        ],
    },
    {
        id: 'lap-3',
        categoryId: 'laptop',
        text: '예산은 어느 정도 생각하고 계세요?',
        step: 3,
        options: [
            { id: 'lap-3-a', text: '100만원 이하', value: 1000000, relatedTags: ['가성비', '저렴'] },
            { id: 'lap-3-b', text: '100~200만원', value: 2000000, relatedTags: ['중급'] },
            { id: 'lap-3-c', text: '200만원 이상', value: 3000000, relatedTags: ['프리미엄', '고급'] },
        ],
    },
];

// 에어프라이어 카테고리 질문
const airfryerQuestions: Question[] = [
    {
        id: 'air-1',
        categoryId: 'airfryer',
        text: '몇 인분 정도 조리하시나요?',
        step: 1,
        options: [
            { id: 'air-1-a', text: '1~2인분', value: 2, relatedTags: ['소용량', '미니'] },
            { id: 'air-1-b', text: '3~4인분', value: 4, relatedTags: ['중용량'] },
            { id: 'air-1-c', text: '5인분 이상', value: 5, relatedTags: ['대용량', '오븐형'] },
        ],
    },
    {
        id: 'air-2',
        categoryId: 'airfryer',
        text: '어떤 형태를 선호하시나요?',
        step: 2,
        options: [
            { id: 'air-2-a', text: '바스켓형 (간편)', value: 'basket', relatedTags: ['바스켓', '간편'] },
            { id: 'air-2-b', text: '오븐형 (다용도)', value: 'oven', relatedTags: ['오븐형', '다용도'] },
        ],
    },
];

export const questions: Question[] = [
    ...inductionQuestions,
    ...laptopQuestions,
    ...airfryerQuestions,
];

export const getQuestionsByCategory = (categoryId: string): Question[] => {
    return questions.filter(q => q.categoryId === categoryId).sort((a, b) => a.step - b.step);
};
