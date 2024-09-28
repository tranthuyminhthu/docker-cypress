FROM cypress/included:12.16.0

WORKDIR /workspace

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of your project files
COPY . .

# Command to run Cypress
CMD ["npx", "cypress", "run"]