import React from 'react';
import { Glyphicon as GlyphiconComponent } from '@paysera/react-common';
import { getComponentPropType } from '../utils/getComponentPropType';
import { PAYSERA_COMPONENTS } from '../const';

export default {
    title: `${PAYSERA_COMPONENTS}/Glyphicons`,
    component: GlyphiconComponent,
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

const Template = args => <GlyphiconComponent {...args} />;

export const Glyphicon = Template.bind({});

Glyphicon.args = {
    glyph: 'align-left',
};
