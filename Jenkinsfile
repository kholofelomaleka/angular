pipeline {
    agent any
    
    environment {
        APP_NAME = "angular-dev-app"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Lint & Test') {
            steps {
                sh 'npm run lint'
                // sh 'npm run test -- --watch=false --browsers=ChromeHeadless'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${APP_NAME}:latest ."
            }
        }

        stage('Deploy to Dev') {
            steps {
                // Stop existing container if it exists
                sh "docker stop ${APP_NAME} || true && docker rm ${APP_NAME} || true"
                // Run the new container
                sh "docker run -d --name ${APP_NAME} -p 8081:80 ${APP_NAME}:latest"
            }
        }
    }
}
