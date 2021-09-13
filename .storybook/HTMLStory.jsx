import React from "react";

/**
 * This component replaces the default <Story /> component in Storybook
 * It takes a `storyHTML` prop and renders is as HTML
 */
export default ({storyHTML}) => {
    const story = React.createElement('div', {
        dangerouslySetInnerHTML: { __html: storyHTML }
    })

    return story;
}
