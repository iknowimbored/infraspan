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
  Blockquote,
} from "@radix-ui/themes";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <Container px="4" py="9" size="2">
      <Flex direction="column" gap="3">
        <Box>
          <Badge>
            <time>May 7, 2025</time>
          </Badge>
        </Box>
        <Box>
          <Button variant="outline">
            <Link
              href="/documents/Infraspan_Privacy_Policy.pdf"
              target="_blank"
            >
              <FileIcon /> View PDF
            </Link>
          </Button>
        </Box>
        <Heading size="7">Privacy Policy</Heading>
      </Flex>
      <Section size="1">
        <Flex direction="column" gap="4">
          <Heading as="h2" size="5">
            Introduction
          </Heading>
          <Text as="p">
            This Privacy Policy applies to Infraspan Pty Ltd, referred to in
            this document as “Infraspan”, “we”, “us”, or “our”. It outlines how
            we collect, use, disclose, and safeguard your personal information.
            References to digital platforms include any websites or services
            operated by or on behalf of Infraspan.
          </Text>
        </Flex>
      </Section>
      <Section size="1">
        <Flex direction="column" gap="4">
          <Heading as="h2" size="5">
            Protecting your privacy is important
          </Heading>
          <Text as="p">
            At Infraspan, we understand your personal information is important
            to you. We are committed to safeguarding your privacy in accordance
            with the Australian Privacy Principles (APPs) outlined in the
            Privacy Act 1988 (Cth) and the New Zealand Privacy Act 2020, where
            applicable.
          </Text>
          <Text as="p">
            The APPs (Schedule 1 of the Privacy Act 1988) are available from the
            OAIC website. The New Zealand Information Privacy Principles (IPPs)
            can be found on the NZ OPC website.
          </Text>
          <ul>
            <Text>
              This policy applies to all personal information collected through:
            </Text>
            <Box pl="6" mt="1">
              <li>Any Infraspan website or digital platform;</li>
              <li>Our clients and business partners;</li>
              <li>Our subcontractors and suppliers;</li>
              <li>Individuals applying for roles within Infraspan;</li>
              <li>Individuals using our services or referred to us.</li>
            </Box>
          </ul>
        </Flex>
      </Section>
      <Section size="1">
        <Flex direction="column" gap="4">
          <Heading as="h2" size="5">
            Information we collect
          </Heading>
          <ul>
            <Text>
              We may collect some or all of the following information:
            </Text>
            <Box pl="6" mt="1">
              <li>Identity and contact details;</li>
              <li>Employment history and qualifications;</li>
              <li>Skills, preferences, and career interests;</li>
              <li>Bank details and Tax File Number (if applicable);</li>
              <li>Referee feedback and interview notes;</li>
              <li>
                Sensitive information (e.g., health data, background checks);
              </li>
              <li>Right-to-work verification documents;</li>
              <li>
                Technical data (e.g., IP address, browser type, usage
                analytics).
              </li>
            </Box>
          </ul>
        </Flex>
      </Section>
      <Section size="1">
        <Flex direction="column" gap="4">
          <Heading as="h2" size="5">
            How we collect your information
          </Heading>
          <ul>
            <Text>We may collect information from:</Text>
            <Box pl="6" mt="1">
              <li>Direct interactions (e.g., forms, emails, meetings);</li>
              <li>Third parties (e.g., referees, background checks);</li>
              <li>Public sources (e.g., LinkedIn, social media);</li>
              <li>Website analytics and cookies.</li>
            </Box>
          </ul>
        </Flex>
      </Section>
      <Section size="1">
        <Flex direction="column" gap="4">
          <Heading as="h2" size="5">
            Why we collect your information
          </Heading>
          <ul>
            <Text>
              Your information is collected, held, used, and disclosed to:
            </Text>
            <Box pl="6" mt="1">
              <li>
                Assess your suitability for opportunities with us or our
                clients;
              </li>
              <li>
                Facilitate communication, contracts, and payroll (if
                applicable);
              </li>
              <li>Provide insights and services aligned with your needs;</li>
              <li>Fulfil legal and compliance obligations;</li>
              <li>Conduct analytics and improve our platforms.</li>
            </Box>
          </ul>
        </Flex>
      </Section>
      <Section size="1">
        <Flex direction="column" gap="4">
          <Heading as="h2" size="5">
            Disclosure of your information
          </Heading>
          <ul>
            <Text>We may share your information with:</Text>
            <Box pl="6" mt="1">
              <li>Prospective employers or project partners;</li>
              <li>
                Our professional service providers (e.g., legal, IT, payroll);
              </li>
              <li>Regulatory bodies, if required by law;</li>
              <li>Overseas partners, if engaged in cross-border projects;</li>
              <li>Third-party platforms we use to operate our services.</li>
            </Box>
          </ul>
        </Flex>
      </Section>
      <Section size="1">
        <Flex direction="column" gap="4">
          <Heading as="h2" size="5">
            Direct marketing
          </Heading>
          <Text as="p">
            From time to time, we may contact you with industry updates,
            services, or opportunities relevant to your profile. You may opt out
            of marketing communications at any time via the unsubscribe link or
            by contacting us directly.
          </Text>
        </Flex>
      </Section>
      <Section size="1">
        <Flex direction="column" gap="4">
          <Heading as="h2" size="5">
            Access, correction, and security
          </Heading>
          <Text as="p">
            You may request access to or correction of your personal information
            by contacting us. We will take reasonable steps to ensure your data
            is accurate and secure, stored in protected systems or controlled
            physical locations.
          </Text>
          <Text as="p">
            Despite our best efforts, no system is completely secure.
            Transmission of data over the internet is at your own risk.
          </Text>
        </Flex>
      </Section>
      <Section size="1">
        <Flex direction="column" gap="4">
          <Heading as="h2" size="5">
            Retention of information
          </Heading>
          <Text as="p">
            We retain your information for as long as reasonably necessary to
            provide our services or to comply with legal and contractual
            obligations.
          </Text>
        </Flex>
      </Section>
      <Section size="1">
        <Flex direction="column" gap="4">
          <Heading as="h2" size="5">
            Cookies
          </Heading>
          <Text as="p">
            Our website may use cookies to enhance user experience. You can
            adjust your browser settings to disable cookies, though this may
            limit some website functions.
          </Text>
        </Flex>
      </Section>
      <Section size="1">
        <Flex direction="column" gap="4">
          <Heading as="h2" size="5">
            Consent
          </Heading>
          <Text as="p">
            By providing us with your personal information, you consent to its
            collection, use, and disclosure in accordance with this Privacy
            Policy.
          </Text>
        </Flex>
      </Section>
      <Section size="1">
        <Flex direction="column" gap="4">
          <Heading as="h2" size="5">
            Changes to this policy
          </Heading>
          <Text as="p">
            This policy may be updated periodically. The latest version will
            always be available at{" "}
            <ThemeLink asChild>
              <Link href="/privacy-policy">
                www.infraspan.com.au/privacy-policy
              </Link>
            </ThemeLink>
            . Please review it regularly.
          </Text>
        </Flex>
      </Section>
      <Section size="1">
        <Flex direction="column" gap="4">
          <Heading as="h2" size="5">
            Contacting Us
          </Heading>
          <Text as="p">
            For privacy-related queries or concerns, please contact:
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
      <Section size="1">
        <Flex direction="column" gap="4">
          <Heading as="h2" size="5">
            Escalating complaints
          </Heading>
          <Text as="p">
            If you are dissatisfied with our response, you may contact:
          </Text>
          <Heading as="h3" size="3">
            In Australia:
          </Heading>
          <Blockquote>
            Office of the Australian Information Commissioner (OAIC) <br />
            GPO Box 5288, Sydney NSW 2001
          </Blockquote>
          <Heading as="h4" size="2">
            Phone
          </Heading>
          <ThemeLink asChild>
            <Link href="tel:1300363992">1300 363 992</Link>
          </ThemeLink>
          <Heading as="h4" size="2">
            Website
          </Heading>
          <ThemeLink asChild>
            <Link
              href="https://www.oaic.gov.au"
              target="_blank"
              rel="noreferrer"
            >
              www.oaic.gov.au
            </Link>
          </ThemeLink>
          <Heading as="h3" size="3">
            In New Zealand:
          </Heading>
          <Blockquote>
            Office of the Privacy Commissioner <br />
            PO Box 10 094, Wellington 6143
          </Blockquote>
          <Heading as="h4" size="2">
            Phone
          </Heading>
          <ThemeLink asChild>
            <Link href="tel:0800803909">0800 803 909</Link>
          </ThemeLink>
          <Heading as="h4" size="2">
            Website
          </Heading>
          <ThemeLink asChild>
            <Link
              href="https://www.privacy.org.nz"
              target="_blank"
              rel="noreferrer"
            >
              www.privacy.org.nz
            </Link>
          </ThemeLink>
        </Flex>
      </Section>
    </Container>
  );
}
