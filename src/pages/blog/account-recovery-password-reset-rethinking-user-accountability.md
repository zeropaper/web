---
path: '/account-recovery-password-reset-rethinking-user-accountability.md/'

title: |
  Account Recovery and Password Reset: Rethinking User Accountability

teaser: |
  Lorem ipsum

seo:
  title: |
    Lorem ipsum
  keywords: |
    account, password, security

publishedAt: '2020-12-02'
author: tacurran

overline: |
  Account Recovery and Password Reset: Rethinking User Accountability with Ory Kratos
---

by Plutus Alighori

With the release of Ory Kratos last month, we want to spend some time addressing
some of the basics, the background and the overall approach. Hopefully, we can
also help the community with this information.

### Background

Background 1985 Bjarne Stroustrup kicked off object orientation and C with "The
C++ Programming Language," Richard Stallmann ignites the Free Software movement
with the "GNU Manifesto," and Microsoft released Windows 1.0. There was a famous
Super Bowl commercial featuring lemmings, and towards the end of the year Steve
Jobs left Apple Computer. Unix was one of the dominant operating systems at the
time. In April, 1985 the Unites States Department of Defense published, as part
of the
[Rainbow Series](https://web.archive.org/web/20110720190716/http://iaarchive.fi/rainbow.html)
of books outlining and explaining computer security standards,the Password
Management Guideline otherwise known as the ["Green Book" CSC-STD-002-85,
Library No. S-226,994](https://fas.org/irp/nsa/rainbow/std002.htm)
due the green colour of its cover. The Green Book made reference, as did every
other book in the Rainbow Series, to the "Orange Book" CSC-STD-001-83, or
Trusted Computer System Evaluation Criteria (TCSEC). That publication defines and
describes feature and assurance requirements for six hierarchical classes of
enhanced security protection for computer systems that are to be used for
processing classified or other sensitive information.

Username and password is a common combination used to create a credential to
access computer systems. The combination of username, for Microsoft employees
insert "user name" here, and password can either be created in part or in whole
by the system admin or the user. Most systems authenticate credentials using the password, biometrics, or a hardware key. MFA is an important topic that will be addressed in the next blogpost.

The reason for mentioning the Green Book, other than the history, is the
industry's emphasis on the user's accountability as one of the fundamental
tenats for good security. "Individual accountability is the key to securing and
controlling any system that processes information on behalf of individuals or
groups of individuals."

The Green Book outlines for example four areas of user responsibilities
including:

- Security awareness - keep passwords private and sign a statement to
  acknowledge understanding these responsibilities;
- Changing passwords - change pw to assure low probability of compromise during
  a password's lifetime; Password lifetime passwords become weaker over time
  when used for authentication purposes, due to the increase probablitiy of
  exposure or theft; and
- Change procedure - there should be a formal secure process in place to change
  a password. There are clear recommendations for workflows such as setting a
  new password, or logging in with a expired password, all generating audit
  trials.

Back in the 1980's many projects were driven or at least funded by the ARPA
(Advanced Research Projects Agency , now known as DARPA). Fortunately today's
development teams can build on an excellent body of thoughtful security work and
approaches. Even though the materials mentioned above are almost all out of date
some of the concepts such as "user accountability" remain central to systems.

While authentication was important and essential for single purpose system
access, the Internet, popularised in the early 1990s, kicked off the generation
of networked systems for the common man. popularised the technologies for
authorisation. Using new communcation protocols such as Hypertext Transfer
Protocol (HTTP), computer applications could not only exchange information but
also permit certain types of access to other websites URL made possible by
HTTPget and later CURL. Netscape was released.

By 2008 Internet traffic was exploding (add data here) and communcation across
applications needed both authentication and authorisations. Twitter was one of
the first companies to promote the use of OpenID, which later lead to the
initial discussions about open authorisation or OAuth as it later became known.

Around the same time Amazon Web Service, announced in 2006, began to gain
acceptance. As the Internet traffic surged so did the desire to have
commercially available computing infrastructure that could be used on top of the
Internet to commoditise certain services such as database management and provide
these services on demand. Amazon was one of the first companies to understand
the deamns and go all in. This trend, sometimes called elastic computing, led to
the emergance of the cloud as we know it today. The cloud could even be called
the Cloud Era

## Born in the Cloud Era
Ory was born in the Cloud Era. In 2020 Ory released it first cloud native
comprehensive developer system for creating managing and using credentials
combined with authorisation flows. Basic security for cloud aplications includes the following four basic functions:
identify, authenticate, authorise, analyse

What about accountability?

## New ID Stack
ORY Kratos is an API-first Identity and User Management system that is built
according to cloud architecture best practices. It implements core use cases
that almost every software application needs to deal with:

- Self-service Login and Registration: Allow end-users to create and sign into
  accounts (we call them identities) using Username / Email and password
  combinations, Social Sign In ("Sign in with Google, GitHub"), Passwordless
  flows, and others.
- Multi-Factor Authentication (MFA/2FA): Support protocols such as TOTP (RFC
  6238 and IETF RFC 4226 - better known as Google Authenticator)
- Account Verification: Verify that an E-Mail address, phone number, or physical
  address actually belong to that identity.
- Account Recovery: Recover access using "Forgot Password" flows, Security Codes
  (in case of MFA device loss), and others. Profile and Account Management:
  Update passwords, personal details, email addresses, linked social profiles
  using secure flows.
- Admin APIs: Import, update, delete identities. We highly recommend reading the
  ORY Kratos introduction docs to learn more about ORY Krato's background,
  feature set, and differentiation from other products.

To set up account recovery, your Identity JSON Schema must have an email in its
traits and add

```
{
  "ory.sh/kratos": {
    "recovery": {
      "via": "email"
    }
  }
}
```

to it, for example:

```
{
  "$id": "https://schemas.ory.sh/presets/kratos/quickstart/email-password/identity.schema.json",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Person",
  "type": "object",
  "properties": {
    "traits": {
      "type": "object",
      "properties": {
        "email": {
          "type": "string",
          "format": "email",
          "title": "E-Mail",
          "minLength": 3,
+         "ory.sh/kratos": {
+           "recovery": {
+             "via": "email"
+           }
+         }
        }
      }
    }
  }
}
```

Account recovery currently supports sending out a recovery link to an email
address. For this to work, you must have the courier SMTP connection configured
in your ORY Kratos Config File (kratos serve -c /home/kratos/.kratos.yml):

### ORY Kratos Config File

```+courier:
+  smtp:
+    connection_uri: smtps://username:password@smtp-server:1234/
 # ...
```

You also need to enable account recovery and have the link strategy enabled:

```
 selfservice:
   strategies:
     link:
       # Defaults to true, so left out. If you explicitly want to disable this strategy,
       # set the value to `false`.
       #
       # enabled: true
   flows:
     # login ...
     # registration...
+    recovery:
+      enabled: true
+      ui_url: http://127.0.0.1:4455/recovery
 # ...
```

That all that's needed! For more information on implementing the UI and details
about the payloads, head over to the Account Recovery Documentation! In 2015
Steve Lippner published a paper in the IEEE "The Birth and Death of the Orange
Book@ that looks into the Orange Book|s legacy and meaning in some of today's
standards.

## Conclusion

What is accountability? Has has the evolution of the Internet validates the
earlz concepts while adding more intelligence into the network so accountability
can be shared between man and machine.

[DoD Computer Security Center. Department of Defense Trusted Computer System
Evaluation Criteria, CSC-STD-00183, 15 August 1983.]

S. B. Lipner, "The Birth and Death of the Orange Book," in IEEE Annals of the
History of Computing, vol. 37, no. 2, pp. 19-31, Apr.-June 2015, doi:
10.1109/MAHC.2015.27.

[national institute of standards and technology https://fas.org/irp/nsa/rainbow/std002.htm]
