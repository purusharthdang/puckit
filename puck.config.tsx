import { Button, type Config } from "@measured/puck";
import { FormField } from "./app/components/form/FormField";
import { FormContainer } from "./app/components/form/FormContainer";
import { BackToEditor } from "./app/components/general/GoToEditor";

type Props = {
  // HeadingBlock: { title: string };
  BackToEditor: { onClick: () => void }
  FormField: {
    type: string, label: string, defaultValue?: string, selectOptions?: { optionName: string }[], onChange: () => void;
  },
  FormContainer: any,
};

const FORM_FIELD_CONFIG = {
  label: { type: 'text' },
  type: {
    type: 'radio', options: [
      { label: 'Text', value: 'text' },
      { label: 'Text Area', value: 'textarea' },
      { label: 'Radio', value: 'radio' },
      { label: 'Number', value: 'number' },
      { label: 'select', value: 'select' },
    ]
  },
  onChange: () => { },
  defaultValue: { type: 'text' }
}

export const config: Config<Props> = {
  components: {
    BackToEditor: {
      render: BackToEditor,
      defaultProps: {
        onClick: () => { }
      }
    },
    FormContainer: {
      render: FormContainer,
      fields: {
        formTitle: {
          type: 'text',
          label: 'Form title'
        },
        submitText: {
          label: 'Submit Button Text',
          type: 'text',
        },
        layout: {
          type: 'radio',
          label: 'Layout',
          options: [
            { label: 'Grid', value: 'grid' },
            { label: 'Inline', value: 'inline' },
          ]
        },
      },
      defaultProps: {
        formTitle: 'My Form',
        submitText: 'Submit'
      }
    },
    FormField: {
      render: FormField,
      resolveFields: (data) => {
        const fields = FORM_FIELD_CONFIG;
        if (data.props.type === 'select' || data.props.type === 'radio') {
          return {
            ...FORM_FIELD_CONFIG,
            selectOptions: {
              type: 'array',
              arrayFields: { optionName: { type: 'text' } },
            },
            onChange: data.props.onChange
          }
        }
        if (data.props.type === 'number') {
          return {
            ...FORM_FIELD_CONFIG,
            defaultValue: { type: 'number' },
          }
        }
        return { ...fields, defaultValue: { type: 'text' } }
      },
      defaultProps: {
        label: 'My label',
        type: 'text',
        selectOptions: [{ optionName: "First Option" }],
        onChange: () => { },
      }
    }
  }
};

export default config;
