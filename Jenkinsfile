pipeline{
    agent any 
    environment{
        DOCKERHUB_USERNAME = "nguyenanhtu3101"
        APP_NAME = "duatopcicd"
        IMAGE_TAG = "${BUILD_NUMBER}"
        IMAGE_NAME = "${DOCKERHUB_USERNAME}" + "/" + "${APP_NAME}"
        REGISTRY_CREDS = 'AnhTu_dockerHub'
    }
	
    stages{
        stage('Clenup workspace'){
           steps{
               script{
                  cleanWs()
               }
           }
        }
        stage('checkout code form github'){
            steps{
                script{
                    git credentialsId: 'github',
                    url: 'https://github.com/NgnAnhTu/dua-top_new.git',
                    branch: 'main'
                }
            }
        }
        stage('Build Docker Image'){
            steps{
                script{
                    docker_image = docker.build "${IMAGE_NAME}"
                }
            }
        }
		stage('Push Docker Image'){
            steps{
                script{
                    docker.withRegistry('',REGISTRY_CREDS){
						docker_image.push("$BUILD_NUMBER")
						docker_image.push('latest')
					}
                }
            }
        }
        stage('Delete Docker images'){
            steps{
                script{
                    sh "docker rmi ${IMAGE_NAME}:${IMAGE_TAG}"
                    sh "docker rmi ${IMAGE_NAME}:latest"
                }
            }
        }
        stage('Updating kubernetes deployment file'){
            steps{
                script{
                    sh """                    
                    cat deployment.yml
                    sed -i 's/${APP_NAME}.*/${APP_NAME}:${IMAGE_TAG}/g' deployment.yml
                    cat deployment.yml
                    """
                }
            }
        }
		
        stage('Push the changed deployment file to Git'){
            when {
                expression { return currentBuild.result == 'SUCCESS' }
            }
            steps{
                script{
                    sh """
                      git config --global user.name "NgnAnhTu"
                      git config --global user.email "anhtu.nguyen3101@gmail.com"                      
                      git add deployment.yml
                      git commit -m "updated the deployment file"
                    """
                    withCredentials([gitUsernamePassword(credentialsId: 'github', gitToolName: 'Default')]) {
                    sh "git push https://github.com/NgnAnhTu/dua-top_new.git main"
                    }
                }
            }
        }
    }
}
