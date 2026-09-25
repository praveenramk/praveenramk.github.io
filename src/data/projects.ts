import { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    slug: "computer-vision-model",
    title: "Computer Vision Multi-Task Learning Model",
    description:
      "A deep learning model for autonomous vehicles performing multiple vision tasks including semantic segmentation, depth estimation, and object detection in real-time.",
    longDescription: `This project implements a sophisticated multi-task learning architecture designed for autonomous vehicle perception systems. The model simultaneously performs three critical computer vision tasks:

**Semantic Segmentation**: Pixel-wise classification of the driving scene into categories like road, vehicles, pedestrians, buildings, and traffic signs with 95%+ mIoU accuracy.

**Depth Estimation**: Monocular depth prediction providing dense depth maps for obstacle avoidance and path planning, achieving sub-meter accuracy at distances up to 80 meters.

**Object Detection**: Real-time detection and tracking of vehicles, pedestrians, cyclists, and other road users using a YOLO-inspired detection head with custom anchor boxes optimized for traffic scenarios.

The architecture uses a shared encoder backbone (ResNet-50 with FPN) that extracts hierarchical features, with task-specific decoder heads for each output. This shared representation learning approach reduces computational overhead by 60% compared to running separate models while maintaining competitive accuracy.

Key technical achievements:
- Real-time inference at 30+ FPS on NVIDIA RTX 3080
- Custom CUDA kernels for efficient multi-scale feature processing
- Uncertainty estimation for safety-critical decision making
- Trained on KITTI, Cityscapes, and proprietary driving datasets`,
    tech: ["Python", "PyTorch", "OpenCV", "CUDA"],
    image: "/project-mtl-architecture.png",
  },
  {
    slug: "ai-ad-critique-system",
    title: "AI Ad Critique System",
    description:
      "An AI critique model that evaluates whether an AI-generated ad is on-brand, safe, high-quality, and ready to post automatically. Think of it as training the AI version of a Creative Director + Brand Compliance Officer.",
    longDescription: `An intelligent quality assurance system for AI-generated advertising content that acts as an automated Creative Director and Brand Compliance Officer.

**Problem Statement:**
As AI-generated ad content becomes more prevalent, brands need automated systems to ensure every generated image meets quality standards, adheres to brand guidelines, and is safe for publication—before it ever reaches human reviewers.

**System Architecture:**
The system ingests two primary inputs:
1. **AI-Generated Ad Images**: Raw creative outputs from generative AI tools
2. **Brand Profiles**: Comprehensive brand guidelines including color palettes, typography rules, tone of voice, and compliance requirements

**Core Analysis Modules:**
- **Brand Alignment Score**: Evaluates how well the ad matches brand colors, fonts, and visual identity
- **Visual Quality Assessment**: Checks for artifacts, resolution issues, composition balance, and professional polish
- **Tone Accuracy Evaluation**: Analyzes whether the messaging and visual style match the intended campaign tone
- **Violation Detection**: Flags potential issues like inappropriate content, trademark violations, or regulatory non-compliance

**Technical Implementation:**
Google Gemini Vision Language Model powers the core analysis engine, leveraging its multimodal capabilities to understand both visual and textual elements. FastAPI provides the RESTful backend with async processing for batch analysis. The React frontend offers an intuitive dashboard for reviewing critiques and managing brand profiles.

**Key Outcomes:**
- 90%+ reduction in manual review time for AI-generated ads
- Consistent brand compliance across all generated content
- Automated flagging of issues before costly mistakes reach production`,
    tech: ["Python", "Google Gemini API", "FastAPI", "React"],
    image: "/project-ad-critique.png",
  },
  {
    slug: "multi-agent-hotel-booking",
    title: "Multi-Agent Hotel Booking System",
    description:
      "A conversational AI system using multiple specialized agents to help users find, compare, and book hotels through natural language interaction.",
    longDescription: `A sophisticated multi-agent conversational system that revolutionizes hotel discovery and booking through intelligent, context-aware interactions powered by LangChain and LangGraph orchestration.

**Problem Statement:**
Finding the right hotel involves navigating countless options, reading scattered reviews, and comparing amenities across platforms. This system streamlines the entire process through natural conversation, letting users describe their preferences and receive personalized recommendations.

**Agent Architecture:**

**1. Metadata Agent (Initial Processing Layer)**
Serves as the entry point for all user queries, enriching them with relevant hotel context including location data, pricing tiers, and amenity classifications. This contextual enrichment ensures downstream agents receive well-structured, actionable information.

**2. Supervisor Agent (Central Router)**
Acts as the orchestration hub after receiving enriched context from the Metadata Agent. Analyzes user intent through sophisticated classification and directs conversation flow to the appropriate specialized agent—whether the user wants reviews, comparisons, or booking assistance.

**3. Review Agent (Semantic Search Specialist)**
Handles all review-related queries by leveraging Pinecone's vector database for semantic similarity search. Retrieves contextually relevant reviews based on user questions like "What do guests say about the breakfast?" or "How clean are the rooms?" and synthesizes coherent, helpful responses.

**4. Comparison Agent (Analysis Expert)**
Specializes in hotel comparisons and detailed information requests. Combines Pinecone vector search for finding similar hotels with structured CSV data for answering specific questions about amenities, pricing, and availability. Generates side-by-side comparisons with clear differentiators.

**Technical Implementation:**
- **LangChain & LangGraph**: Powers the multi-agent orchestration with stateful conversation management
- **Langfuse**: Provides observability, tracing, and debugging for agent interactions
- **DVC**: Manages data versioning for hotel datasets and embeddings
- **Ragas**: Enables evaluation and quality metrics for RAG pipelines
- **OpenAI**: LLM backbone for natural language understanding and generation
- **Pinecone**: Vector database for semantic search across reviews and hotel descriptions
- **FastAPI**: High-performance async backend serving the agent system
- **React**: Responsive chat interface with real-time streaming responses

**Key Outcomes:**
- Natural language hotel search reducing time-to-booking by 70%
- Semantically-aware review summarization surfacing relevant guest experiences
- Intelligent hotel comparisons based on user-specific priorities
- Full conversation traceability for debugging and improvement iterations`,
    tech: ["LangChain", "LangGraph", "OpenAI", "Pinecone", "FastAPI", "React"],
    image: "/project-hotel-booking.png",
  },
  {
    slug: "document-entity-extraction-faiss",
    title: "Document Entity Extraction & Spell Correction with FAISS",
    description:
      "An NLP solution that extracts common entities from logistics invoices like box counts and month names, while correcting spelling errors using FAISS vector similarity search.",
    longDescription: `An intelligent document processing pipeline that combines Named Entity Recognition (NER) with vector-based spell correction to extract and clean data from logistics invoices and shipping documents.

**Problem Statement:**
Logistics documents and invoices often contain critical information like box quantities, dates, shipping details, and product names—but OCR errors, typos, and inconsistent formatting make automated extraction unreliable. This system addresses both challenges: identifying key entities AND correcting spelling errors in a single pipeline.

**System Architecture:**

**1. Document Input Layer**
Accepts scanned invoices, PDFs, and image files. Preprocessing includes noise reduction, skew correction, and OCR to extract raw text from documents.

**2. NLP Entity Extraction Module**
SpaCy's NER pipeline identifies domain-specific entities:
- **Quantities**: Box counts, unit numbers, pallet quantities
- **Temporal Data**: Month names, dates, delivery windows
- **Location Entities**: Addresses, warehouse codes, shipping destinations
- **Product Information**: SKUs, item descriptions, category codes

Custom entity patterns are trained on logistics-specific datasets to recognize industry terminology and document formats.

**3. Word Embedding Model (GloVe)**
Pre-trained GloVe embeddings convert words into dense vector representations. Each correctly spelled word in the logistics vocabulary is embedded and stored, creating a reference database of valid terms.

**4. FAISS Index (Facebook AI Similarity Search)**
The core spell correction engine leverages FAISS for efficient nearest-neighbor search across hundreds of thousands of vocabulary vectors. When a potentially misspelled word is detected:
- Convert the word to its vector representation
- Query FAISS to find the K nearest correctly spelled words
- Apply confidence thresholds and context rules to select the best correction

**5. Correction Module**
Combines FAISS similarity results with:
- Edit distance calculations for validation
- Domain-specific rules (e.g., "Janury" → "January", "boxs" → "boxes")
- Confidence scoring to flag uncertain corrections for human review

**Technical Implementation:**
- **Python**: Core language for the entire pipeline
- **SpaCy**: Production-grade NER with custom entity training
- **GloVe Embeddings**: Pre-trained word vectors fine-tuned on logistics vocabulary
- **FAISS**: Highly optimized vector similarity search supporting sub-millisecond queries
- **Pandas**: Data processing and transformation for extracted entities

**Key Outcomes:**
- 95%+ accuracy in entity extraction from logistics documents
- 85% automatic correction rate for common OCR and spelling errors
- 10x faster document processing compared to manual review
- Structured output ready for ERP system integration`,
    tech: ["Python", "FAISS", "SpaCy", "GloVe"],
    image: "/project-nlp-spell-correction.png",
  },
  {
    slug: "intelligent-document-processing-logistics",
    title: "Intelligent Document Processing for Logistics",
    description:
      "A computer vision-based OCR solution for classifying and extracting information from logistics invoices including commercial, tax, shipping invoices, packing lists, and bills of lading.",
    longDescription: `An end-to-end document processing pipeline that combines computer vision, OCR, and rule-based classification to automatically process and extract structured data from diverse logistics documents.

**Problem Statement:**
Logistics operations generate massive volumes of documents—commercial invoices, shipping manifests, bills of lading, packing lists—each with different formats, layouts, and required fields. Manual data entry is slow, expensive, and error-prone. This system automates the entire workflow from document ingestion to structured data output.

**Supported Document Types:**

**Commercial Invoice**: Extracts buyer/seller details, item descriptions, quantities, unit prices, total amounts, payment terms, and Incoterms.

**Pro Forma Invoice**: Captures preliminary pricing, estimated weights, and shipping cost projections for customs clearance.

**Tax Invoice**: Identifies tax registration numbers, tax rates, taxable amounts, and compliance-related fields.

**Shipping Invoice**: Extracts carrier information, freight charges, routing details, and delivery instructions.

**Packing List**: Processes box counts, item weights, dimensions, packing materials, and carton numbering.

**Bill of Lading**: Captures shipper/consignee details, vessel information, port of loading/discharge, container numbers, and seal numbers.

**System Architecture:**

**1. Image Preprocessing (OpenCV)**
- Noise reduction and contrast enhancement
- Skew detection and deskewing
- Border removal and ROI detection
- Binarization for optimal OCR performance

**2. Text Detection & OCR (Tesseract)**
- Layout analysis to identify text regions, tables, and key-value pairs
- Multi-language OCR support for international documents
- Confidence scoring for extraction quality assessment
- Table structure recognition for line item extraction

**3. Document Classification (Rule-Based)**
- Pattern matching on document headers and keywords
- Layout fingerprinting to identify document templates
- Confidence-based routing with manual review fallback
- Support for multi-page document handling

**4. Information Extraction (SpaCy + Regex)**
- Named Entity Recognition for dates, amounts, companies, addresses
- Custom regex patterns for invoice numbers, PO numbers, container IDs
- Field validation against expected formats and value ranges
- Cross-field verification for data consistency

**5. Structured Output**
- JSON/CSV export with extracted fields
- Confidence scores per field for quality control
- Original document linkage for audit trails
- ERP/WMS integration-ready format

**Technical Implementation:**
- **Python**: Core language powering the entire pipeline
- **OpenCV**: Image preprocessing and enhancement
- **Tesseract**: Industry-standard open-source OCR engine
- **SpaCy**: NLP-based entity extraction and text processing
- **Regex**: Pattern matching for document-specific field extraction
- **Pandas**: Data transformation and output formatting

**Key Outcomes:**
- 90%+ accuracy in document type classification
- 85%+ field extraction accuracy across document types
- 50x faster processing compared to manual data entry
- Scalable architecture handling 1000+ documents per hour`,
    tech: ["Python", "OpenCV", "Tesseract", "SpaCy"],
    image: "/project-invoice-ocr.png",
  },
  {
    slug: "serial-number-extraction-part-tracking",
    title: "Serial Number Extraction for Part Tracking & Traceability",
    description:
      "A computer vision-based OCR solution using Raspberry Pi that reads serial numbers from engine blocks on conveyor belts, enabling manufacturers to track parts throughout the supply chain.",
    longDescription: `A computer vision system using Raspberry Pi and OCR that automatically reads serial numbers stamped or etched onto engine blocks as they move along conveyor belts, enabling part traceability in manufacturing.

**Problem Statement:**
Manufacturing facilities produce thousands of engine blocks daily, each requiring unique identification for quality control, recall management, and regulatory compliance. Manual serial number entry is slow, error-prone, and cannot keep pace with modern production lines. This system automates part identification at line speed using cost-effective edge computing hardware.

**Component Focus:**

**Engine Blocks**: Reads serial numbers stamped or etched into cast iron/aluminum surfaces, handling variations in font depth, lighting conditions, and surface textures typical of automotive manufacturing. The system is optimized specifically for the challenging characteristics of engine block identification—reflective metal surfaces, recessed characters, and industrial lighting conditions.

**System Architecture:**

**1. Raspberry Pi Camera Module**
- High-resolution camera module positioned along conveyor belt
- Controlled lighting setup to minimize shadows and reflections
- Triggered capture synchronized with part presence sensors
- Edge processing for low-latency extraction

**2. Computer Vision Preprocessing (OpenCV)**
- Real-time image acquisition and buffering
- Adaptive contrast enhancement for etched/stamped characters
- Noise reduction optimized for industrial environments
- Image normalization for consistent OCR input

**3. Object Detection Model**
- Deep learning model to locate serial number regions on engine blocks
- Handles varying positions and orientations of stamped numbers
- Region of Interest (ROI) extraction for focused OCR processing
- Trained on manufacturing-specific datasets

**4. OCR Engine (Tesseract)**
- Industrial font recognition trained on manufacturing character sets
- Handling of degraded, partial, or low-contrast markings
- Alphanumeric validation against expected serial number formats
- Confidence scoring for quality assurance

**Technical Implementation:**
- **Python**: Core language for image processing and system orchestration
- **OpenCV**: Real-time computer vision and image preprocessing
- **Tesseract**: OCR engine for character recognition
- **Object Detection**: Deep learning model for serial number region localization
- **Raspberry Pi**: Edge computing platform for on-device processing

**Key Outcomes:**
- 99.5%+ read rate for stamped/etched serial numbers
- <100ms processing time per part for real-time extraction
- Cost-effective edge deployment using Raspberry Pi hardware
- Elimination of manual data entry errors
- Scalable solution deployable across multiple production lines`,
    tech: ["Python", "OpenCV", "Tesseract", "Raspberry Pi"],
    image: "/project-serial-tracking.png",
  },
  {
    slug: "poultry-bird-counting",
    title: "Poultry Bird Counting with Blob-based Density Estimation",
    description:
      "A computer vision object counting model that counts poultry birds in farm images using blob-based density estimation instead of bounding boxes, deployed as a mobile-friendly web application.",
    longDescription: `A computer vision system that automatically counts poultry birds in farm images using density map estimation, deployed as a smartphone-accessible web application for easy field use.

**Problem Statement:**
Poultry farmers need accurate bird counts for inventory management, health monitoring, and regulatory compliance. Manual counting is time-consuming, stressful for birds, and prone to errors—especially in large flocks. Traditional object detection with bounding boxes struggles with dense, overlapping subjects. This system uses blob-based counting to handle crowded scenes where individual birds are difficult to distinguish.

**Why Blob-based Counting?**
Unlike bounding box detection which requires identifying each bird individually, density estimation treats birds as "blobs" and generates a heatmap where pixel intensities represent the likelihood of bird presence. Summing these density values yields an accurate count even when birds overlap or occlude each other.

**System Architecture:**

**1. Mobile Web Interface**
- Responsive web app accessible via smartphone browser
- Simple "Upload Image" interface for field use
- Camera integration for direct photo capture
- Works on iOS and Android devices

**2. Web Server / Backend**
- Receives uploaded images via REST API
- Handles image preprocessing and model inference
- Returns predicted count to the mobile interface
- Scalable architecture for concurrent users

**3. Preprocessing Pipeline**
- **Resize**: Standardizes input dimensions for the CNN
- **Normalize**: Adjusts pixel values for optimal model performance
- **Quality checks**: Validates image format and resolution

**4. Blob-based Counting Model**
The core counting pipeline uses density map regression instead of bounding boxes:

- **Feature Extraction (CNN Backbone)**: Extracts hierarchical visual features from the input image using a convolutional neural network
- **Density Map Estimation (Heatmap Generation)**: Regresses a density map where each pixel value represents the local "birdness" intensity
- **Blob Integration & Counting (Summing Density Values)**: Integrates the density map to produce the final count—mathematically equivalent to summing all pixel values in the heatmap

**Technical Implementation:**
- **Python**: Core language for backend and ML pipeline
- **PyTorch**: Deep learning framework for CNN-based density estimation
- **Flask**: Lightweight web server for REST API
- **OpenCV**: Image preprocessing and manipulation

**Key Outcomes:**
- Accurate counting in dense, overlapping bird scenarios
- Mobile-friendly interface for field use
- No need for individual bird localization
- Handles varying lighting and camera angles
- Scales from small coops to large commercial farms`,
    tech: ["Python", "PyTorch", "Flask", "OpenCV"],
    image: "/project-poultry-counting.png",
  },
  {
    slug: "poultry-farm-iot-monitoring",
    title: "Poultry Farm IoT Monitoring System",
    description:
      "An IoT-based solution that monitors temperature and humidity in poultry farms using sensors connected to a microcontroller, with data streaming to Google Cloud IoT, stored in BigQuery, and visualized in Grafana dashboards.",
    longDescription: `An end-to-end IoT monitoring system for poultry farms that tracks environmental conditions in real-time, enabling farmers to maintain optimal living conditions for their birds and prevent losses due to temperature or humidity extremes.

**Problem Statement:**
Poultry health and productivity are highly sensitive to environmental conditions. Temperature and humidity extremes can cause heat stress, reduced egg production, increased mortality, and disease outbreaks. Manual monitoring is impractical for large farms operating 24/7. This system provides continuous automated monitoring with real-time alerts and historical trend analysis.

**System Architecture:**

**1. Sensor Layer**
- **Temperature Sensors**: DHT22 or DS18B20 sensors measuring ambient temperature with ±0.5°C accuracy
- **Humidity Sensors**: Capacitive humidity sensors tracking relative humidity levels
- Multiple sensor nodes distributed throughout the poultry house for comprehensive coverage

**2. Microcontroller (Edge Device)**
- ESP32 or Arduino-based microcontroller collecting sensor data
- Local data aggregation and preprocessing
- WiFi connectivity for cloud communication
- Configurable sampling intervals (default: every 30 seconds)
- Local buffering for network resilience

**3. Google Cloud IoT Core**
- Secure MQTT/HTTP bridge for device-to-cloud communication
- Device authentication using public/private key pairs
- Automatic device registry and management
- Real-time data ingestion pipeline
- Pub/Sub integration for event streaming

**4. BigQuery (Data Warehouse)**
- Time-series data storage optimized for analytics
- Partitioned tables by timestamp for efficient queries
- Historical data retention for trend analysis
- SQL-based querying for custom reports
- Integration with Google Data Studio for additional visualizations

**5. Grafana Dashboard**
- Real-time temperature and humidity graphs
- Threshold-based alerting (email, SMS, Slack notifications)
- Historical trend analysis with customizable time ranges
- Multi-farm dashboard support
- Mobile-responsive interface for on-the-go monitoring

**Technical Implementation:**
- **Arduino/ESP32**: Microcontroller programming in C++ for sensor data collection
- **Google Cloud IoT Core**: Managed service for secure device connectivity
- **BigQuery**: Serverless data warehouse for scalable storage and analytics
- **Grafana**: Open-source visualization platform for real-time dashboards

**Key Outcomes:**
- 24/7 automated environmental monitoring
- Early warning alerts preventing bird stress and mortality
- Historical data for optimizing farm conditions
- Scalable architecture supporting multiple poultry houses
- Reduced manual monitoring labor by 90%`,
    tech: ["Arduino", "Google Cloud IoT", "BigQuery", "Grafana"],
    image: "/project-poultry-iot.png",
  },
];
