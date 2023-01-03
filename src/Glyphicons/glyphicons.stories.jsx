import React from 'react';
import { Glyphicon } from '@paysera/react-common';
import { getComponentPropType } from '../utils/getComponentPropType';
import { PAYSERA_COMPONENTS } from '../const';

export default {
    title: `${PAYSERA_COMPONENTS}/Glyphicons`,
    component: Glyphicon,
    argTypes: {
        glyph: {
            control: 'text',
            ...getComponentPropType('text'),
        },
        bsClass: {
            control: 'text',
            ...getComponentPropType('string'),
        },
    },
};

const Template = args => <Glyphicon {...args} />;

export const AlignLeft = Template.bind({});
export const AlignCenter = Template.bind({});
export const AlignRight = Template.bind({});
export const AlignJustify = Template.bind({});
export const Star = Template.bind({});

AlignLeft.args = {
    glyph: 'align-left',
};

AlignCenter.args = {
    glyph: 'align-center',
};

AlignRight.args = {
    glyph: 'align-right',
};

AlignJustify.args = {
    glyph: 'align-justify',
};

Star.args = {
    glyph: 'star',
};
