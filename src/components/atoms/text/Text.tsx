import React from 'react';
import './text.css';

export interface TextProps {
    children: React.ReactNode;
    variant: 'footer-text' | 'title text--title--primary-title' | 'title text--title--secondary-title' | 'checkbox-form-title' | 'countdown-text' | 'countdown-timeunit';
    type: 'p' | 'span' | 'label'; 
    key?: number;
}

const Text: React.FC<TextProps> = ({ children, variant, type='p'}) => {

    const TagName = type;

    return (
        <TagName className={`text text--${variant}`}>{children}</TagName>
    );
    
}

export default Text;
