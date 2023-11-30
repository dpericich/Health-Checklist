export const ageGroups: string[] = [
    "18 - 25",
    "26 - 35",
    "36 - 45",
    "46 - 55",
    "56 - 65",
    "66 - 75",
    "76 - 85",
    "86 - 95",
];

export const genders: string[] = [
    'male',
    'female'
];

export const formatAgeGroup = (ageGroup: string): string => {
    return ageGroup.replaceAll(" ", "");
};

export const formatGenderName = (gender: string): string => {
    return gender.charAt(0).toUpperCase() + gender.slice(1, gender.length);
};