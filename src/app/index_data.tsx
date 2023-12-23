export const ageGroups: string[] = [
    "20-39",
    "40-59",
    "60-79+"
];

export const genders: string[] = [
    'male',
    'female'
];

export const formatAgeGroup = (ageGroup: string): string => {
    return ageGroup.replaceAll(/\+|\s/g, "");
};

export const formatGenderName = (gender: string): string => {
    return gender.charAt(0).toUpperCase() + gender.slice(1, gender.length);
};