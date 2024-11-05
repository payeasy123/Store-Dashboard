import { Button, SideDrawer } from "@/components/custom-ui";
import { Input, TextArea } from "@/components/custom-ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormEventHandler } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface SideDrawerProps {
    drawerTrigger: boolean;
    handleClose: () => void;
}

export const CreateProjectSideDrawer = (props: SideDrawerProps) => {
    const { drawerTrigger, handleClose } = props;

    const createProjectSchema = z.object({
        name: z.string(),
        description: z.string(),
    });

    type CreateProjectSchemaType = z.infer<typeof createProjectSchema>;

    const {
        getValues,
        register,
        formState: { errors },
        reset,
    } = useForm<CreateProjectSchemaType>({
        resolver: zodResolver(createProjectSchema),
    });

    const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        const data = getValues();
    };

    const closeDrawer = () => {
        reset();
        handleClose();
    };

    return (
        <SideDrawer drawerTrigger={drawerTrigger} handleClose={closeDrawer}>
            <div className="mx-auto w-[85%] animate-fade-in py-10">
                <h2 className="text-2xl font-semibold text-secondary">Create Project</h2>

                <p className="my-2 text-base font-medium text-[#646464]">Input the correct details in the fields below;</p>

                <form className="mt-7" onSubmit={onSubmit}>
                    <div className="my-5 flex flex-row flex-wrap items-center gap-x-8 gap-y-8">
                        <div className="flex-1">
                            <Input
                                required
                                name="name"
                                label="Project Name"
                                register={register}
                                placeholder="Dynamic Certificate Generator"
                                error={errors?.name ? errors.name.message : undefined}
                            />
                        </div>
                    </div>

                    <div className="my-5 flex flex-row flex-wrap items-center gap-x-8 gap-y-8">
                        <div className="flex-1">
                            <TextArea
                                name="description"
                                label="Project Description"
                                rows={10}
                                register={register}
                                placeholder="A dynamic certificate generator that generates certificates for users"
                                error={errors?.name ? errors.name.message : undefined}
                            />
                        </div>
                    </div>

                    <div className="my-16 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                        <div className="flex items-center gap-3">
                            <Button label="Back" variant="outlined" onClick={closeDrawer} />

                            <Button label="Submit" variant="contained" type="submit" />
                        </div>
                    </div>
                </form>
            </div>
        </SideDrawer>
    );
};
