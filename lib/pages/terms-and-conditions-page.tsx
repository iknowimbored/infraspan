"use client";

import { FileIcon } from "@radix-ui/react-icons";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link as ThemeLink,
  Section,
  Text,
} from "@radix-ui/themes";
import Link from "next/link";

export default function TermsAndConditionsPage() {
  return (
    <Container px="4" py="9" size="2">
      <Flex direction="column" gap="3">
        <Flex gap="2">
          <Badge>
            <time>May 7, 2025</time>
          </Badge>
          <Badge color="pink">ABN: 29 676 108 106</Badge>
        </Flex>
        <Box>
          <Button variant="outline">
            <Link
              href="/documents/Infraspan_Terms_and_Conditions.pdf"
              target="_blank"
            >
              <FileIcon /> View PDF
            </Link>
          </Button>
        </Box>
        <Heading size="7">Terms and Conditions</Heading>
      </Flex>
      <Section size="1">
        <Flex direction="column" gap="4">
          <Heading as="h2" size="5">
            1. Scope of Services
          </Heading>
          <Text as="p">
            Infraspan provides consulting, advisory, and technical services
            including (but not limited to) IT infrastructure, cybersecurity,
            cloud solutions, project management, and digital transformation. The
            specific scope of services will be defined in a Statement of Work
            (SOW), proposal, or agreement.
          </Text>
        </Flex>
      </Section>
      <Section size="1">
        <Flex direction="column" gap="4">
          <Heading as="h2" size="5">
            2. Engagement and Payment
          </Heading>
          <Text as="p">
            The information on this website is intended to provide an overview
            of our capabilities as an IT consulting company. All engagements are
            tailored to meet the specific needs and requirements of each client.
          </Text>
          <Text as="p">
            Fees, deliverables, and billing arrangements will be outlined in a
            written agreement or Statement of Work prior to commencement of any
            services.
          </Text>
          <Text as="p">
            Unless stated otherwise, all fees are exclusive of GST. Standard
            payment terms are 14 days from the date of invoice, and interest may
            be charged on overdue amounts at a rate of 2% per month.
          </Text>
        </Flex>
      </Section>
      <Section size="1">
        <Flex direction="column" gap="4">
          <Heading as="h2" size="5">
            3. Client Responsibilities
          </Heading>
          <ul>
            <Text>You agree to:</Text>
            <Box pl="6" mt="1">
              <li>
                Provide timely access to information, resources, and personnel
                as required for delivery.
              </li>
              <li>
                Ensure that all information you provide is accurate and
                complete.
              </li>
              <li> Maintain appropriate internal systems and backups.</li>
            </Box>
          </ul>
        </Flex>
      </Section>
      <Section size="1">
        <Flex direction="column" gap="4">
          <Heading as="h2" size="5">
            4. Confidentiality
          </Heading>
          <Text as="p">
            Each party agrees to maintain the confidentiality of the other
            party's proprietary or confidential information and not to disclose
            such information to any third party without prior written consent,
            unless required by law.
          </Text>
        </Flex>
      </Section>
      <Section size="1">
        <Flex direction="column" gap="4">
          <Heading as="h2" size="5">
            5. Intellectual Property
          </Heading>
          <ul>
            <Box pl="6" mt="1">
              <li>
                All intellectual property (IP) developed or supplied by
                Infraspan in the course of service delivery remains the property
                of Infraspan unless otherwise agreed in writing.
              </li>
              <li>
                You may receive a non-exclusive, non-transferable license to use
                deliverables solely for your internal business purposes.
              </li>
            </Box>
          </ul>
        </Flex>
      </Section>
      <Section size="1">
        <Flex direction="column" gap="4">
          <Heading as="h2" size="5">
            6. Third-Party Services
          </Heading>
          <Text as="p">
            Where services or software provided by third parties are involved,
            you acknowledge and agree to comply with any applicable third-party
            terms and licensing conditions. Infraspan does not accept liability
            for third-party service failures.
          </Text>
        </Flex>
      </Section>
      <Section size="1">
        <Flex direction="column" gap="4">
          <Heading as="h2" size="5">
            7. Liability and Disclaimers
          </Heading>
          <Text as="p">
            To the maximum extent permitted by law, we exclude all warranties,
            guarantees, and liability for loss or damage (including indirect or
            consequential loss) arising out of or in connection with our
            services.
          </Text>
          <Text as="p">
            If any condition or warranty is implied into these Terms under
            consumer law, our liability is limited to re-supplying the services
            or refunding the fees paid.
          </Text>
        </Flex>
      </Section>
      <Section size="1">
        <Flex direction="column" gap="4">
          <Heading as="h2" size="5">
            8. Force Majeure
          </Heading>
          <Text as="p">
            We are not liable for any delay or failure to perform obligations
            due to events beyond our reasonable control, including natural
            disasters, cyberattacks, pandemic, government actions, or supplier
            failure.
          </Text>
        </Flex>
      </Section>
      <Section size="1">
        <Flex direction="column" gap="4">
          <Heading as="h2" size="5">
            9. Termination
          </Heading>
          <Text as="p">
            Either party may terminate an engagement with reasonable notice in
            writing (usually 14 days) unless otherwise agreed. Upon termination,
            you agree to pay for all services rendered up to the termination
            date, including reasonable costs incurred as a result of
            termination.
          </Text>
        </Flex>
      </Section>
      <Section size="1">
        <Flex direction="column" gap="4">
          <Heading as="h2" size="5">
            10. Governing Law
          </Heading>
          <Text as="p">
            These Terms are governed by the laws of the State of [Insert State],
            Australia. Any disputes will be subject to the exclusive
            jurisdiction of the courts of that State.
          </Text>
        </Flex>
      </Section>
      <Section size="1">
        <Flex direction="column" gap="4">
          <Heading as="h2" size="5">
            11. Amendments
          </Heading>
          <Text as="p">
            Infraspan reserves the right to update these Terms at any time. The
            latest version will be made available on our website.
          </Text>
        </Flex>
      </Section>
      <Section size="1">
        <Flex direction="column" gap="4">
          <Heading as="h2" size="5">
            12. Contact Us
          </Heading>
          <Text as="p">
            For questions or clarifications regarding these Terms, please
            contact:
          </Text>
          <Heading as="h3" size="3">
            Infraspan Pty Ltd
          </Heading>
          <Heading as="h4" size="2">
            Email
          </Heading>
          <ThemeLink asChild>
            <Link href="mailto:info@infraspan.com.au">
              info@infraspan.com.au
            </Link>
          </ThemeLink>
          <Heading as="h4" size="2">
            Website
          </Heading>
          <ThemeLink asChild>
            <Link href="/">www.infraspan.com.au</Link>
          </ThemeLink>
        </Flex>
      </Section>
    </Container>
  );
}
