export interface Category {
    id: string;
    name: string;
    icon: string; // Emoji or Icon name
    description: string;
}

export interface Product {
    id: string;
    categoryId: string;
    name: string;
    brand: string;
    price: number;
    originalPrice?: number;
    imageUrl: string;
    features: string[]; // 제품 특징 태그
    score: number; // 추천 점수 계산용
    purchaseUrl?: string; // 최저가 링크
    tags: string[]; // 매칭 로직용 태그 (예: "3구", "빌트인", "게이밍")
}

export interface QuestionOption {
    id: string;
    text: string;
    value: string | number | boolean;
    relatedTags: string[]; // 이 답변을 선택했을 때 가중치를 줄 태그들
}

export interface Question {
    id: string;
    categoryId: string;
    text: string;
    options: QuestionOption[];
    step: number; // 질문 순서
}
