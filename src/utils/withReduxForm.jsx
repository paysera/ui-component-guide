import React from 'react';
import { reduxForm, reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const withReduxForm = (Story) => {
    const reducers = { form: formReducer };
    const reducer = combineReducers(reducers);
    const store = createStore(reducer);
    const StoryWithForm = reduxForm({ form: 'withReduxForm' })(Story);

    return (
        <Provider store={store}>
            <form>
                <StoryWithForm />
            </form>
        </Provider>
    );
};

export default withReduxForm;
