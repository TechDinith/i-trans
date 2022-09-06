import React from "react";
import Typography from "@mui/material/Typography";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { iFormInput } from "../../interfaces/components/iContact/iContact";
import UseEmail from "./Email/useEmail";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Box from "@mui/material/Box";

export default function Contact() {
  const [disable, setDisable] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iFormInput>();

  const { sendEmail } = UseEmail(
    "https://public.herotofu.com/v1/ccc1e6b0-2d95-11ed-9d7d-1fea1503699b"
  );

  const onSubmit: SubmitHandler<iFormInput> = (data) => {
    setDisable(true);
    sendEmail({
      email: data.email,
      date: new Date().toISOString(),
      name: data.name,
      info: data.info,
      otherContacts: data.otherContacts,
    }).then((res) => {
      if (res.status === "success") {
        setIsSuccess(true);
        setIsError(false);
      } else {
        setIsError(true);
        setDisable(false);
        setIsSuccess(false);
      }
    });

    setTimeout(() => {
      setIsError(false);
      setDisable(false);
      setIsSuccess(false);
      reset();
    }, 15000);
  };

  return (
    <>
      <Typography variant="h2">
        <b>Contact</b> <ConnectWithoutContactIcon />
      </Typography>

      <Grid container alignItems="center" justifyContent="center">
        {isSuccess ? (
          <Typography variant="h6">
            Thank you. We've got your information and we'll get back to you
            soon!
          </Typography>
        ) : isError ? (
          <Typography variant="h6" color="red">
            Sorry! Something went wrong! please contact us directly via email!
          </Typography>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  fullWidth
                  variant="filled"
                  {...field}
                  label="Email"
                  margin="dense"
                  type="email"
                  error={Boolean(errors.email)}
                />
              )}
              rules={{
                required: { value: true, message: "Email is Required" },
              }}
            />
            {errors.email && (
              <Typography color="red" variant="caption">
                {errors.email.message}
              </Typography>
            )}
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  variant="filled"
                  {...field}
                  label="Name"
                  fullWidth
                  margin="dense"
                  error={Boolean(errors.name)}
                />
              )}
              rules={{ required: { value: true, message: "Name is Required" } }}
            />
            {errors.name && (
              <Typography color="red" variant="caption">
                {errors.name.message}
              </Typography>
            )}
            <Controller
              name="info"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  variant="filled"
                  {...field}
                  label="Project Info"
                  fullWidth
                  margin="dense"
                  multiline
                  rows={4}
                  error={Boolean(errors.info)}
                />
              )}
              rules={{
                required: { value: true, message: "Project Info is Required" },
              }}
            />
            {errors.name && (
              <Typography color="red" variant="caption">
                {errors.info?.message}
              </Typography>
            )}
            <Controller
              name="otherContacts"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  variant="filled"
                  {...field}
                  label="Other Contacts"
                  fullWidth
                  margin="dense"
                  multiline
                  rows={4}
                />
              )}
            />

            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Button
                type="submit"
                color="success"
                variant="contained"
                fullWidth
                disabled={disable}
              >
                <SendIcon fontSize="large" />
              </Button>
            </Grid>
          </form>
        )}
        <Box display="flex" alignItems="center" width="100%" mt="1%">
          <EmailIcon />
          <Typography variant="caption" ml="1%">
            <b>itranscontact@gmail.com</b>
          </Typography>
        </Box>
      </Grid>
    </>
  );
}
