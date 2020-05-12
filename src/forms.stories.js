import React from 'react';
import {
    Form,
    FormGroup,
    FormControl,
    InputGroup,
    ControlLabel,
    HelpBlock,
    Checkbox,
    Radio,
    Button,
    Col,
    Glyphicon,
    MenuItem,
    DropdownButton,
    Row
} from 'react-bootstrap';

export default { title: 'Forms' };

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

export const SupportedControls = () => (
    <div>
        <h2 className="page-header">Supported controls <small>Checkbox, Radio, FormControl.Static, HelpBlock</small></h2>
        <form>
            <FieldGroup
                id="formControlsText"
                type="text"
                label="Text"
                placeholder="Enter text"
            />
            <FieldGroup
                id="formControlsEmail"
                type="email"
                label="Email address"
                placeholder="Enter email"
            />
            <FieldGroup id="formControlsPassword" label="Password" type="password" />
            <FieldGroup
                id="formControlsFile"
                type="file"
                label="File"
                help="Example block-level help text here."
            />

            <Checkbox checked readOnly>
                Checkbox
            </Checkbox>
            <Radio checked readOnly>
                Radio
            </Radio>

            <FormGroup>
                <Checkbox inline>1</Checkbox> <Checkbox inline>2</Checkbox>{' '}
                <Checkbox inline>3</Checkbox>
            </FormGroup>
            <FormGroup>
                <Radio name="radioGroup" inline>
                    1
                </Radio>{' '}
                <Radio name="radioGroup" inline>
                    2
                </Radio>{' '}
                <Radio name="radioGroup" inline>
                    3
                </Radio>
            </FormGroup>

            <FormGroup controlId="formControlsSelect">
                <ControlLabel>Select</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                    <option value="select">select</option>
                    <option value="other">...</option>
                </FormControl>
            </FormGroup>
            <FormGroup controlId="formControlsSelectMultiple">
                <ControlLabel>Multiple select</ControlLabel>
                <FormControl componentClass="select" multiple>
                    <option value="select">select (multiple)</option>
                    <option value="other">...</option>
                </FormControl>
            </FormGroup>

            <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Textarea</ControlLabel>
                <FormControl componentClass="textarea" placeholder="textarea" />
            </FormGroup>

            <FormGroup>
                <ControlLabel>Static text</ControlLabel>
                <FormControl.Static>email@example.com</FormControl.Static>
            </FormGroup>

            <Button type="submit">Submit</Button>
        </form>
    </div>
);

export const FormLayouts = () => (
    <div>
        <h2 className="page-header">Form layouts</h2>

        <h3>Default forms</h3>
        <p>Preferred form type, label follows input field, easiest way to show form using mobile-first approach.</p>

        <Form>
            <FormGroup controlId="formInlineName">
                <ControlLabel>Name</ControlLabel>{' '}
                <FormControl type="text" placeholder="Jane Doe" />
            </FormGroup>{' '}
            <FormGroup controlId="formInlineEmail">
                <ControlLabel>Email</ControlLabel>{' '}
                <FormControl type="email" placeholder="jane.doe@example.com" />
            </FormGroup>{' '}
            <Button type="submit">Send invitation</Button>
        </Form>

        <hr/>

        <h3>Inline forms</h3>

        <Form inline>
            <FormGroup controlId="formInlineName">
                <ControlLabel>Name</ControlLabel>{' '}
                <FormControl type="text" placeholder="Jane Doe" />
            </FormGroup>{' '}
            <FormGroup controlId="formInlineEmail">
                <ControlLabel>Email</ControlLabel>{' '}
                <FormControl type="email" placeholder="jane.doe@example.com" />
            </FormGroup>{' '}
            <Button type="submit">Send invitation</Button>
        </Form>

        <hr />

        <h3>Horizontal forms</h3>

        <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                    Email
                </Col>
                <Col sm={10}>
                    <FormControl type="email" placeholder="Email" />
                </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                    Password
                </Col>
                <Col sm={10}>
                    <FormControl type="password" placeholder="Password" />
                </Col>
            </FormGroup>
            <FormGroup>
                <Col smOffset={2} sm={10}>
                    <Checkbox>Remember me</Checkbox>
                </Col>
            </FormGroup>
            <FormGroup>
                <Col smOffset={2} sm={10}>
                    <Button type="submit">Sign in</Button>
                </Col>
            </FormGroup>
        </Form>

        <hr />

        <h3>Grid forms</h3>

        <p>This example shows how form be single column on mobile devices, and have more columns on bigger screens</p>

        <form>
            <Row>
                <Col xs={24} md={8}>
                    <FormGroup controlId="formInlineName">
                        <ControlLabel>Input a</ControlLabel>{' '}
                        <FormControl type="text" />
                    </FormGroup>{' '}
                    <FormGroup controlId="formInlineEmail">
                        <ControlLabel>Input b</ControlLabel>{' '}
                        <FormControl type="email" />
                    </FormGroup>{' '}
                </Col>
                <Col xs={24} md={8}>
                    <FormGroup controlId="formInlineName">
                        <ControlLabel>Input c</ControlLabel>{' '}
                        <FormControl type="text"/>
                    </FormGroup>{' '}
                    <FormGroup controlId="formInlineEmail">
                        <ControlLabel>Input d</ControlLabel>{' '}
                        <FormControl type="email" />
                    </FormGroup>{' '}
                </Col>
                <Col xs={24} md={8}>
                    <FormGroup controlId="formInlineName">
                        <ControlLabel>Input e</ControlLabel>{' '}
                        <FormControl type="text" />
                    </FormGroup>{' '}
                    <FormGroup controlId="formInlineEmail">
                        <ControlLabel>Input f</ControlLabel>{' '}
                        <FormControl type="email"  />
                    </FormGroup>{' '}
                </Col>
                <Col xs={24}>
                    <div><Button type="submit">Submit</Button></div>
                </Col>
            </Row>
        </form>
    </div>
);

export const InputGroups = () => (
    <form>
        <FormGroup>
            <InputGroup>
                <InputGroup.Addon>@</InputGroup.Addon>
                <FormControl type="text" />
            </InputGroup>
        </FormGroup>
        <FormGroup>
            <InputGroup>
                <FormControl type="text" />
                <InputGroup.Addon>.00</InputGroup.Addon>
            </InputGroup>
        </FormGroup>
        <FormGroup>
            <InputGroup>
                <InputGroup.Addon>$</InputGroup.Addon>
                <FormControl type="text" />
                <InputGroup.Addon>.00</InputGroup.Addon>
            </InputGroup>
        </FormGroup>

        <FormGroup>
            <InputGroup>
                <FormControl type="text" />
                <InputGroup.Addon>
                    <Glyphicon glyph="music" />
                </InputGroup.Addon>
            </InputGroup>
        </FormGroup>

        <FormGroup>
            <InputGroup>
                <InputGroup.Button>
                    <Button>Before</Button>
                </InputGroup.Button>
                <FormControl type="text" />
            </InputGroup>
        </FormGroup>
        <FormGroup>
            <InputGroup>
                <FormControl type="text" />
                <DropdownButton
                    componentClass={InputGroup.Button}
                    id="input-dropdown-addon"
                    title="Action"
                >
                    <MenuItem key="1">Item</MenuItem>
                </DropdownButton>
            </InputGroup>
        </FormGroup>

        <FormGroup>
            <InputGroup>
                <InputGroup.Addon>
                    <input type="radio" aria-label="..." />
                </InputGroup.Addon>
                <FormControl type="text" />
            </InputGroup>
        </FormGroup>
        <FormGroup>
            <InputGroup>
                <InputGroup.Addon>
                    <input type="checkbox" aria-label="..." />
                </InputGroup.Addon>
                <FormControl type="text" />
            </InputGroup>
        </FormGroup>
    </form>
);

export const InputSizes = () => (
    <form>
        <FormGroup bsSize="large">
            <FormControl type="text" placeholder="Large text" />
        </FormGroup>
        <FormGroup>
            <FormControl type="text" placeholder="Normal text" />
        </FormGroup>
        <FormGroup bsSize="small">
            <FormControl type="text" placeholder="Small text" />
        </FormGroup>
    </form>
);

export const ValidationStates = () => (
    <form>
        <FormGroup controlId="formValidationSuccess1" validationState="success">
            <ControlLabel>Input with success</ControlLabel>
            <FormControl type="text" />
            <HelpBlock>Help text with validation state.</HelpBlock>
        </FormGroup>

        <FormGroup controlId="formValidationWarning1" validationState="warning">
            <ControlLabel>Input with warning</ControlLabel>
            <FormControl type="text" />
        </FormGroup>

        <FormGroup controlId="formValidationError1" validationState="error">
            <ControlLabel>Input with error</ControlLabel>
            <FormControl type="text" />
        </FormGroup>

        <FormGroup controlId="formValidationNull" validationState={null}>
            <ControlLabel>Input with no validation state</ControlLabel>
            <FormControl type="text" />
        </FormGroup>

        <FormGroup controlId="formValidationSuccess2" validationState="success">
            <ControlLabel>Input with success and feedback icon</ControlLabel>
            <FormControl type="text" />
            <FormControl.Feedback />
        </FormGroup>

        <FormGroup controlId="formValidationWarning2" validationState="warning">
            <ControlLabel>Input with warning and feedback icon</ControlLabel>
            <FormControl type="text" />
            <FormControl.Feedback />
        </FormGroup>

        <FormGroup controlId="formValidationError2" validationState="error">
            <ControlLabel>Input with error and feedback icon</ControlLabel>
            <FormControl type="text" />
            <FormControl.Feedback />
        </FormGroup>

        <FormGroup controlId="formValidationSuccess3" validationState="success">
            <ControlLabel>Input with success and custom feedback icon</ControlLabel>
            <FormControl type="text" />
            <FormControl.Feedback>
                <Glyphicon glyph="music" />
            </FormControl.Feedback>
        </FormGroup>

        <FormGroup controlId="formValidationWarning3" validationState="warning">
            <ControlLabel>Input group with warning</ControlLabel>
            <InputGroup>
                <InputGroup.Addon>@</InputGroup.Addon>
                <FormControl type="text" />
            </InputGroup>
            <FormControl.Feedback />
        </FormGroup>

        <Form componentClass="fieldset" horizontal>
            <FormGroup controlId="formValidationError3" validationState="error">
                <Col componInputSizesentClass={ControlLabel} xs={3}>
                    Input with error
                </Col>
                <Col xs={9}>
                    <FormControl type="text" />
                    <FormControl.Feedback />
                </Col>
            </FormGroup>

            <FormGroup controlId="formValidationSuccess4" validationState="success">
                <Col componentClass={ControlLabel} xs={3}>
                    Input group with success
                </Col>
                <Col xs={9}>
                    <InputGroup>
                        <InputGroup.Addon>@</InputGroup.Addon>
                        <FormControl type="text" />
                    </InputGroup>
                    <FormControl.Feedback />
                </Col>
            </FormGroup>
        </Form>

        <Form componentClass="fieldset" inline>
            <FormGroup controlId="formValidationWarning4" validationState="warning">
                <ControlLabel>Input with warning</ControlLabel>{' '}
                <FormControl type="text" />
                <FormControl.Feedback />
            </FormGroup>{' '}
            <FormGroup controlId="formValidationError4" validationState="error">
                <ControlLabel>Input group with error</ControlLabel>{' '}
                <InputGroup>
                    <InputGroup.Addon>@</InputGroup.Addon>
                    <FormControl type="text" />
                </InputGroup>
                <FormControl.Feedback />
            </FormGroup>
        </Form>

        <Checkbox validationState="success">Checkbox with success</Checkbox>
        <Radio validationState="warning">Radio with warning</Radio>
        <Checkbox validationState="error">Checkbox with error</Checkbox>

        {/* This requires React 15's <span>-less spaces to be exactly correct. */}
        <FormGroup validationState="success">
            <Checkbox inline>Checkbox</Checkbox> <Checkbox inline>with</Checkbox>{' '}
            <Checkbox inline>success</Checkbox>
        </FormGroup>
    </form>
);
