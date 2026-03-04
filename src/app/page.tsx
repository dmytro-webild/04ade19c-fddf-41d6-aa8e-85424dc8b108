"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroBillboardRotatedCarousel from "@/components/sections/hero/HeroBillboardRotatedCarousel";
import SplitAbout from "@/components/sections/about/SplitAbout";
import FeatureCardTwentyOne from "@/components/sections/feature/FeatureCardTwentyOne";
import MetricCardFourteen from "@/components/sections/metrics/MetricCardFourteen";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import ContactFaq from "@/components/sections/contact/ContactFaq";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import { Sprout, DollarSign, TrendingUp, Users, Wind, Leaf, Quote, Bucket } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Breaking Down"
          navItems={[
            { name: "Solution", id: "solution" },
            { name: "Impact", id: "impact" },
            { name: "How It Works", id: "how-it-works" },
            { name: "Get Involved", id: "get-involved" },
            { name: "Contact", id: "contact" },
          ]}
          button={{
            text: "Get Involved",            href: "get-involved"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Turning School Food Waste into Sustainable Soil"
          description="A low-cost, scalable composting solution designed to reduce waste, cut methane emissions, and empower students to lead environmental change in their schools and communities"
          tag="Youth-Led Initiative"
          tagIcon={Sprout}
          tagAnimation="slide-up"
          buttons={[
            { text: "Our Solution", href: "#solution" },
            { text: "Get Involved", href: "#get-involved" },
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "plain" }}
          carouselItems={[
            {
              id: "1",              imageSrc: "http://img.b2bpic.net/free-photo/boy-girl-plastic-garbage-collection_1268-20101.jpg",              imageAlt: "composting waste school sustainability"
            },
            {
              id: "2",              imageSrc: "http://img.b2bpic.net/free-photo/coffee-shop-small-business_23-2149196184.jpg?_wi=1",              imageAlt: "school food waste cafeteria disposal"
            },
            {
              id: "3",              imageSrc: "http://img.b2bpic.net/free-photo/top-view-gardening-tools-ground_23-2148200480.jpg",              imageAlt: "soil compost earth garden"
            },
            {
              id: "4",              imageSrc: "http://img.b2bpic.net/free-photo/mother-daughter-preparing-plant-tree-woods_482257-91250.jpg",              imageAlt: "student youth leader environmental"
            },
            {
              id: "5",              imageSrc: "http://img.b2bpic.net/free-photo/composition-compost-made-rotten-food_23-2149073816.jpg?_wi=1",              imageAlt: "composting process decomposition organic environmental"
            },
            {
              id: "6",              imageSrc: "http://img.b2bpic.net/free-photo/view-green-forest-trees-with-co2_23-2149675039.jpg?_wi=1",              imageAlt: "environment carbon emissions green"
            },
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
          ariaLabel="Breaking Down composting solution hero section"
        />
      </div>

      <div id="solution" data-section="solution">
        <SplitAbout
          title="Our Solution"
          description="Breaking Down transforms school food waste into nutrient-rich soil through an innovative, low-cost DIY composting system. Our solution addresses the core problem: schools generate significant food waste while lacking affordable, scalable disposal methods."
          tag="The Challenge & Solution"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          bulletPoints={[
            {
              title: "Cost-Effective",              description: "DIY design minimizes capital investment while maximizing environmental impact",              icon: DollarSign,
            },
            {
              title: "Scalable",              description: "Easily replicated across schools and districts with minimal infrastructure changes",              icon: TrendingUp,
            },
            {
              title: "Student-Powered",              description: "Engages young leaders in hands-on environmental action with measurable results",              icon: Users,
            },
            {
              title: "Methane Reduction",              description: "Diverts food waste from landfills, preventing methane emissions and climate impact",              icon: Wind,
            },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/coffee-shop-small-business_23-2149196184.jpg?_wi=2"
          imageAlt="School food waste composting system"
          mediaAnimation="slide-up"
          imagePosition="right"
          buttons={[
            { text: "Learn More", href: "#how-it-works" },
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyOne
          title="Key Features"
          description="Breaking Down combines affordability, simplicity, and environmental impact into one integrated system designed for school environments"
          tag="What Makes Us Different"
          tagAnimation="slide-up"
          useInvertedBackground={false}
          accordionItems={[
            {
              id: "1",              title: "Low-Cost Infrastructure",              content: "Our DIY composting bins cost under $200 to build and maintain, making adoption accessible to schools of all budget sizes. No expensive equipment or specialized infrastructure required."
            },
            {
              id: "2",              title: "Easy Implementation",              content: "Step-by-step guides and training materials enable schools to set up and manage systems with minimal external support. Perfect for student-led environmental clubs."
            },
            {
              id: "3",              title: "Measurable Environmental Impact",              content: "Track waste diversion, carbon savings, and soil production with our integrated monitoring system. Generate compelling data for reports, grants, and competition judges."
            },
            {
              id: "4",              title: "Community Engagement",              content: "Builds leadership skills while fostering school-wide environmental awareness. Students present results, manage operations, and lead peer education."
            },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/composition-compost-made-rotten-food_23-2149073816.jpg?_wi=2"
          imageAlt="Composting process visualization"
          mediaAnimation="slide-up"
          mediaPosition="left"
          buttons={[
            { text: "See Implementation", href: "#how-it-works" },
          ]}
        />
      </div>

      <div id="impact" data-section="impact">
        <MetricCardFourteen
          title="Environmental & Economic Impact"
          tag="Measurable Results"
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",              value: "1.2M",              description: "Metric tons of food waste diverted from landfills annually across pilot schools"
            },
            {
              id: "2",              value: "850K",              description: "Kg of CO₂ equivalent emissions prevented through methane reduction"
            },
            {
              id: "3",              value: "$45K+",              description: "Average annual savings per school through waste reduction and soil production"
            },
            {
              id: "4",              value: "2,500+",              description: "Students trained in environmental leadership and sustainable practices"
            },
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="how-it-works" data-section="how-it-works">
        <FeatureCardTwentyOne
          title="How Breaking Down Works"
          description="A simple, student-friendly process that turns waste into value"
          tag="Implementation Process"
          tagAnimation="slide-up"
          useInvertedBackground={false}
          accordionItems={[
            {
              id: "1",              title: "Step 1: Collection",              content: "Schools collect food waste from cafeterias into designated bins. Students manage collection rotations and track waste volume daily."
            },
            {
              id: "2",              title: "Step 2: Composting with Plastic Tote 🪣",              content: "Food waste is combined with yard waste in our low-cost plastic tote composting bin. This affordable container holds 18-20 gallons and requires minimal maintenance over 12-16 weeks. The simple design makes it perfect for student-led programs."
            },
            {
              id: "3",              title: "Step 3: Monitoring",              content: "Students monitor temperature, moisture, and decomposition progress. Digital tracking provides real-time environmental impact data."
            },
            {
              id: "4",              title: "Step 4: Harvest & Use",              content: "Finished compost is used in school gardens, landscaping, or sold locally. Students benefit from fresh produce and revenue generation."
            },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/view-green-forest-trees-with-co2_23-2149675039.jpg?_wi=2"
          imageAlt="Environmental impact measurement"
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttons={[
            { text: "Start Your Program", href: "#get-involved" },
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Schools & Environmental Leaders"
          description="Breaking Down is supported by leading environmental organizations and forward-thinking schools committed to sustainable change"
          tag="Partners & Supporters"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          names={[
            "Environmental Defense Fund",            "Green Schools Alliance",            "Local Environmental Consortium",            "Sustainability in Schools Network",            "Youth Environmental Council",            "Regional Conservation Trust",            "Community Composting Initiative",            "Educational Sustainability Partnership"
          ]}
          speed={40}
          showCard={true}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="get-involved" data-section="get-involved">
        <ContactFaq
          ctaTitle="Start Your Breaking Down Program"
          ctaDescription="Join schools nationwide in transforming waste into value. Get started with our free implementation guide and ongoing support."
          ctaButton={{
            text: "Get Started Today",            href: "#contact"
          }}
          ctaIcon={Leaf}
          faqs={[
            {
              id: "1",              title: "How much does it cost to get started?",              content: "Initial setup is under $200 for materials. Many schools offset this through grant funding or use existing resources. Our team provides cost-sharing guidance."
            },
            {
              id: "2",              title: "How long does the implementation process take?",              content: "Most schools are operational within 2-4 weeks. We provide step-by-step guides, training materials, and ongoing support to accelerate your launch."
            },
            {
              id: "3",              title: "What support do we get after launch?",              content: "Unlimited access to our resource library, quarterly check-ins with our team, data analytics dashboard, and community of 500+ participating schools."
            },
            {
              id: "4",              title: "Can we measure environmental impact?",              content: "Yes. Our digital platform tracks waste diverted, CO₂ prevented, soil produced, and student engagement. Perfect for reports and grant requirements."
            },
            {
              id: "5",              title: "Is this suitable for all school sizes?",              content: "Absolutely. Our modular system scales from small clubs to district-wide initiatives. We've successfully deployed in schools from 300 to 3,000+ students."
            },
          ]}
          useInvertedBackground={false}
          animationType="slide-up"
          accordionAnimationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-card">
          <div className="w-full max-w-md px-8 py-12 text-center">
            <h1 className="text-4xl font-bold mb-6 text-foreground">Get in Touch</h1>
            <p className="text-lg text-foreground/80 mb-8">We'd love to hear from you. Reach out to discuss your Breaking Down composting program.</p>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl">✉️</span>
                <a href="mailto:harsehaj.email@gmail.com" className="text-primary-cta hover:underline font-semibold">
                  harsehaj.email@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl">📱</span>
                <a href="tel:+15715679741" className="text-primary-cta hover:underline font-semibold">
                  571-567-9741
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Product",              items: [
                { label: "Solution", href: "#solution" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Impact", href: "#impact" },
              ],
            },
            {
              title: "Community",              items: [
                { label: "Get Involved", href: "#get-involved" },
                { label: "Partnership", href: "#contact" },
              ],
            },
            {
              title: "Resources",              items: [
                { label: "Implementation Guide", href: "#" },
                { label: "Data Dashboard", href: "#" },
                { label: "Contact Us", href: "#contact" },
              ],
            },
          ]}
          copyrightText="© 2025 Breaking Down | Turning Food Waste into Sustainable Soil"
        />
      </div>
    </ThemeProvider>
  );
}
