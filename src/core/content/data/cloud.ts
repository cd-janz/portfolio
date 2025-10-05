import type {IDetailedSkill} from "../../types/ISkill.ts";
import AWSIcon from "../../assets/icons/cloud/AWSIcon.astro"
import AzureIcon from "../../assets/icons/cloud/AzureIcon.astro"
import DockerIcon from "../../assets/icons/cloud/DockerIcon.astro"
import KubernetesIcon from "../../assets/icons/cloud/KubernetesIcon.astro"
import LinuxIcon from "../../assets/icons/cloud/LinuxIcon.astro"
import NginxIcon from "../../assets/icons/cloud/nginxIcon.astro"
import TerraformIcon from "../../assets/icons/cloud/TerraformIcon.astro"

export const linux: IDetailedSkill = {
  icon: LinuxIcon,
  label: "Linux",
  key: "linux",
  proficiency: 6,
  frequency: 10,
  learningFrom: new Date(2022, 6)
}

export const nginx: IDetailedSkill = {
  icon: NginxIcon,
  label: "Nginx",
  key: "nginx",
  proficiency: 5,
  frequency: 4,
  learningFrom: new Date(2023, 6)
}

export const terraform: IDetailedSkill = {
  icon: TerraformIcon,
  label: "terraform",
  key: "terraform",
  proficiency: 4,
  frequency: 2,
  learningFrom: new Date(2024, 8)
}

export const aws: IDetailedSkill = {
  icon: AWSIcon,
  label: "AWS",
  key: "aws",
  proficiency: 6,
  frequency: 4,
  learningFrom: new Date(2022, 2)
}

export const azure: IDetailedSkill = {
  icon: AzureIcon,
  label: "Azure",
  key: "azure",
  learningFrom: new Date(2021, 6),
  proficiency: 8,
  frequency: 7,
}

export const docker: IDetailedSkill = {
  icon: DockerIcon,
  label: "Docker",
  key: "docker",
  frequency: 9,
  proficiency: 7,
  learningFrom: new Date(2022, 4),
}

export const kubernetes: IDetailedSkill = {
  icon: KubernetesIcon,
  label: "Kubernetes",
  key: "kubernetes",
  frequency: 2,
  proficiency: 4,
  learningFrom: new Date(2024, 2),
}