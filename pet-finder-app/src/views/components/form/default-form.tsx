import { FormikConfig, FormikErrors, FormikProps, FormikProvider, useFormik } from "formik";
import { ForwardedRef, forwardRef, useCallback } from "react";
import * as yup from "yup";

export interface FormConfig {
    [key: string]: any
}

export interface DefaultFormRef {
    onSubmit: () => void;
    options: FormikProps<FormConfig>;
    insert: (values: any) => void,
    reset: (template: FormConfig) => void
}

interface DefaultFormProps {
    children?: JSX.Element | JSX.Element[]
    onSubmit: (values: FormConfig) => void;
    config: FormConfig;
    validation?: yup.AnyObjectSchema;
    formikProps?: { config: FormikConfig<string[]> };
}

export const DefaultForm = forwardRef(<T extends FormConfig>(props: DefaultFormProps, ref: ForwardedRef<DefaultFormRef>) => {

    const formik: FormikProps<FormConfig> = useFormik<FormConfig>({
        initialValues: props.config as T,
        enableReinitialize: false,
        validationSchema: props.validation,
        ...props.formikProps || {},
        onSubmit: (values) => { props.onSubmit(values) }
    })

    const submitForm = useCallback(async () => {
        if (!formik.isValid) {
            const firstError = getFirstPropNameWithValue(formik.errors);
            const errorMessage = formik.errors[firstError];

            if (typeof errorMessage === 'string') {

            }
        }
        formik.handleSubmit();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formik]);

    return (
        <form onSubmit={formik.handleSubmit} className="w-full">

            <div className="flex flex-col">
                <FormikProvider value={formik}>
                    {props.children}
                </FormikProvider>
            </div>

        </form>
    )
})

function getFirstPropNameWithValue(obj: any): string {
    for (const prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop) && obj[prop]) return prop;
    }
    return "!";
}
