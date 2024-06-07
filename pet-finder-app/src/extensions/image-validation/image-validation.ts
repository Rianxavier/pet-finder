import noImage from '@assets/image/noimage-profile.jpg'

export const ImageValidation = (url?: string): string => {
    if (url === null || url === undefined) {
        return noImage;
    } else {
        return url;
    }
}