"use client";

import { CheckIcon } from "@radix-ui/react-icons";
import {
  Blockquote,
  Box,
  Button,
  Callout,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Section,
  Separator,
  Spinner,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  fullName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  message: string;
};

export const ContactUsCard = ({
  heading,
  subheading,
}: {
  heading?: string;
  subheading?: string;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    try {
      setIsSubmitted(false);
      setIsLoading(true);
    } catch {
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
      }, 800);
    }
  };

  return (
    <>
      {heading && <Separator style={{ width: "100%" }} />}
      <Section size="4" px="5">
        <Container size="3">
          <Flex
            direction={{ initial: "column", sm: "row" }}
            justify="between"
            width="100%"
            gap={{ initial: "3", sm: "8" }}
          >
            <Flex
              flexGrow="1"
              flexShrink="1"
              flexBasis="0"
              direction="column"
              gap="5"
              mb={{ initial: "5", sm: "0" }}
            >
              {heading && (
                <Box>
                  <Heading
                    as="h2"
                    size={{ initial: "6", sm: "7" }}
                    weight="medium"
                  >
                    {heading}
                  </Heading>
                  {subheading && <Text>{subheading}</Text>}
                </Box>
              )}
              <Box>
                <Heading as="h3" size="5" weight="medium" mb="3">
                  Business Address
                </Heading>
                <Blockquote>
                  L 1 457-459 ELIZABETH ST., <br /> SURRY HILLS, 2010, NSW,{" "}
                  <br /> AUSTRALIA
                </Blockquote>
              </Box>
              <Box>
                <Heading as="h3" size="5" weight="medium" mb="3">
                  Email Address
                </Heading>
                <Link href="mailto:info@infraspan.com.au">
                  info@infraspan.com.au
                </Link>
              </Box>
              {/* <Box>
                <Heading as="h3" size="5" weight="medium" mb="3">
                  Mobile Number
                </Heading>
                <Link href="tel:02xxxxxxx">02 xxx xxxx</Link>
              </Box> */}
            </Flex>
            <Box flexGrow="1" flexShrink="1" flexBasis="0">
              <Card size="2">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid columns={{ initial: "1", sm: "2" }} gapX="3" gapY="5">
                    <Box width="100%">
                      <Text as="label" htmlFor="fullName" size="2">
                        Full Name <Text color="ruby">*</Text>
                      </Text>
                      <TextField.Root
                        id="fullName"
                        {...register("fullName")}
                        required
                        placeholder="First name and last name"
                        radius="large"
                      />
                    </Box>
                    <Box width="100%">
                      <Text as="label" htmlFor="email" size="2">
                        Email Address <Text color="ruby">*</Text>
                      </Text>
                      <TextField.Root
                        id="email"
                        type="email"
                        {...register("email")}
                        required
                        placeholder="name@company.com"
                        radius="large"
                      />
                    </Box>
                    <Box width="100%">
                      <Text as="label" htmlFor="phoneNumber" size="2">
                        Phone Number <Text color="ruby">*</Text>
                      </Text>
                      <TextField.Root
                        id="phoneNumber"
                        type="tel"
                        {...register("phoneNumber")}
                        required
                        placeholder="Phone number"
                        radius="large"
                      />
                    </Box>
                    <Box width="100%">
                      <Text as="label" htmlFor="companyName" size="2">
                        Company Name <Text color="ruby">*</Text>
                      </Text>
                      <TextField.Root
                        id="companyName"
                        {...register("companyName")}
                        required
                        placeholder="Company name"
                        radius="large"
                      />
                    </Box>
                    <Box gridColumn={{ sm: "1 / span 2" }}>
                      <Text as="label" htmlFor="message" size="2">
                        Message <Text color="ruby">*</Text>
                      </Text>
                      <TextArea
                        id="message"
                        {...register("message")}
                        required
                        minLength={10}
                        placeholder="Write a message..."
                      />
                    </Box>
                    <Box gridColumn={{ sm: "1 / span 2" }}>
                      <Button
                        type="submit"
                        style={{ width: "100%" }}
                        size="3"
                        disabled={isLoading}
                      >
                        {isLoading && <Spinner aria-label="Loading" />}
                        Submit
                      </Button>
                    </Box>
                  </Grid>
                </form>
                {isSubmitted && (
                  <Callout.Root color="green" mt="5">
                    <Callout.Icon>
                      <CheckIcon />
                    </Callout.Icon>
                    <Callout.Text>Coming soon.</Callout.Text>
                  </Callout.Root>
                )}
              </Card>
            </Box>
          </Flex>
        </Container>
      </Section>
    </>
  );
};
