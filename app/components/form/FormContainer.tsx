import { Button, DropZone } from "@measured/puck"

export const FormContainer = ({ layout, formTitle = 'My Form', submitText = 'Submit' }) =>
(
    <form
        className='p-6 space-y-4 bg-white rounded-lg border border-gray-300 flex-col'
        onSubmit={(e) => e.preventDefault()}
    >
        <h1 className='text-xl text-extrabold'>
            {formTitle}
        </h1>
        {layout === 'grid' ?
            <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
            >
                <DropZone zone="left-column" disallow={['FormContainer']} />
                <DropZone zone="right-column" disallow={['FormContainer']} />
            </div> :
            <DropZone zone="single-column" disallow={['FormContainer']} />
        }

        <Button>{submitText}</Button>
    </form>
)